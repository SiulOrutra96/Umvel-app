import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  login(email: string, password: string) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log('RES: ', res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  signup(email: string, password: string) {
    this.auth.createUserWithEmailAndPassword(email, password)
      .catch(err => {
        console.log(err);
      });
  }

  logout() {
    this.auth.signOut();
  }
}
