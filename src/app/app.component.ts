import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor() {

    const config = {
      apiKey: "AIzaSyC6xWFbNowPeldl3bznILf-DAtrShDafYY",
      authDomain: "siteiut-db5c1.firebaseapp.com",
      databaseURL: "https://siteiut-db5c1.firebaseio.com",
      projectId: "siteiut-db5c1",
      storageBucket: "siteiut-db5c1.appspot.com",
      messagingSenderId: "719490526305",
      appId: "1:719490526305:web:23b491cc836baae4"
    };

    firebase.initializeApp(config);
  }
}
