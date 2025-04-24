import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registracija',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registracija.component.html',
  styleUrl: './registracija.component.css',
})
export class RegistracijaComponent {
  username = '';
  email = '';
  password = '';
  registrationError = false;

  constructor(private authService: AuthService, private router: Router) { }

  onRegister(): void {
    if (this.authService.register(this.username, this.email, this.password)) {
      this.router.navigate(['/prijava']); // Ako je uspešno, preusmeri na prijavu
    } else {
      this.registrationError = true; // Greška ako korisnik već postoji
    }
  }
}

