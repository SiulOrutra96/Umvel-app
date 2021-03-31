import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      emailCtrl: new FormControl('', [Validators.required, Validators.email]),
      passwordCtrl: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.get('emailCtrl').value, this.signupForm.get('passwordCtrl').value)
        .then(res => {
          this.router.navigateByUrl('/users');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
}
