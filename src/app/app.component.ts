import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  isAuthenticated: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.currentUser().subscribe(user => {
      this.isAuthenticated = user != null;
    });
  }

  logout() {
    this.authService.logout();
  }
}
