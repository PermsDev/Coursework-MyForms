import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service'; // Sesuaikan dengan path ke FirebaseService Anda

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  newUsername: string = '';
  newPassword: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private firebaseService: FirebaseService) {}

  onSignUp() {
    this.firebaseService.signUp(this.newUsername, this.newPassword)
      .then(() => {
        this.successMessage = 'Pendaftaran berhasil. Silakan login.';
        this.router.navigate(['/login']);
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
