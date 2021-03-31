import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraphService {

  constructor(private http: HttpClient) { }

  fetchData() {
    return this.http.get<{ sales: { id: number, date: string, quantity: number, car_make: string }[] }>('https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a').pipe(map(res => {
      let sales = res.sales;

      // Sort by car_make
      sales.sort((a, b) => {
        if (a.car_make > b.car_make) {
          return 1;
        }
        if (a.car_make < b.car_make) {
          return -1;
        }
        return 0;
      });

      // Group sales by car_make
      let car_make;
      let quantity;
      let results = [];

      sales.forEach(sale => {
        if (!car_make) {
          car_make = sale.car_make;
          quantity = sale.quantity;
        } else if (sale.car_make == car_make) {
          quantity += sale.quantity;
        } else {
          results.push({ car_make, quantity });
          car_make = sale.car_make;
          quantity = sale.quantity;
        }
      });
      results.push({ car_make, quantity });

      return results;
    }));
  }
}
