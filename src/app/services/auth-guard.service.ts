import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private router : Router) { }

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {

    return new Promise(

      (resolve) => {

        firebase.auth().onAuthStateChanged(

          (user) => {

            if (user) {

              resolve(true);
            }
            else {

              this.router.navigate(['/auth'])
              resolve(false);
            }
          }
        )
      }
    )
  }
}
