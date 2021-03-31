import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/');
    });
  }

  currentUser() {
    return this.auth.user;
  }
}
