import { Injectable } from '@angular/core';

import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  signInUser(email: string, mdp: string) {

    return new Promise(
      (resolve, reject) => {

        firebase.auth().signInWithEmailAndPassword(email, mdp).then(
          () => {

            resolve();
          },
          (error) => {

            reject(error);
          }
        );
      }
    );
  }

  signOutUser() {

    firebase.auth().signOut();
  }
}
