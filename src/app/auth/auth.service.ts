import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  // Logs in to firebase
  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  // Signs up to firebase
  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  // Logout from firebase
  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('/');
    });
  }

  // Returns the user as observable 
  currentUser() {
    return this.auth.user;
  }
}
