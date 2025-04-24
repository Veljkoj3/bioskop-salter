import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-prijava',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './prijava.component.html',
  styleUrl: './prijava.component.css',
})
export class PrijavaComponent {
  username = '';
  password = '';
  loginError = false;

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    if (this.authService.login(this.username, this.password)) {
      this.router.navigate(['/']);
    } else {
      this.loginError = true;
    }
  }
}


