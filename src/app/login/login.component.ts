import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  onLogin() {
    this.firebaseService.login(this.username, this.password)
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error: firebase.auth.Error): void => {
        this.errorMessage = error.message;
      });
  }
}
