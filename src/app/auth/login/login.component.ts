import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      passwordCtrl: new FormControl('', [Validators.required])
    });
  }

  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.get('emailCtrl').value, this.loginForm.get('passwordCtrl').value);
    }
  }
}
