import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  fetchUsers() {
    return this.http.get<{ users: User[] }>('https://run.mocky.io/v3/d5ddf1ff-a0e2-4a7e-bbcc-e832bef6a503').pipe(map(res => {
      return res.users;
    }));
  }
}
