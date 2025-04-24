import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ProfilComponent implements OnInit {
  user: any = null;


  showChangePassword = false;
  showUpdateProfile = false;
  oldPassword = '';
  newPassword = '';
  updatedEmail = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = this.authService.getLoggedInUser();
    console.log('Ulogovani korisnik sa rezervacijama:', this.user);

    if (this.user && this.user.reservations) {
      console.log('Korisničke rezervacije:', this.user.reservations);
    } else {
      console.log('Nema rezervacija za ovog korisnika.');
    }
  }

  logout() {
    this.authService.logout();
  }

  cancelReservation(reservation: any): void {
    const index = this.user.reservations.indexOf(reservation);
    if (index > -1) {
      this.user.reservations.splice(index, 1);

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const userIndex = users.findIndex((u: any) => u.username === this.user.username);

      if (userIndex !== -1) {
        users[userIndex].reservations = this.user.reservations;
        localStorage.setItem('users', JSON.stringify(users));
        this.authService.updateUser(this.user);
      }

      alert('Rezervacija je otkazana.');
    }
  }

  

  changePassword() {
    if (this.oldPassword !== this.user.password) {
      alert('Stara šifra nije tačna.');
      return;
    }

    if (!this.newPassword || this.newPassword.length < 4) {
      alert('Nova šifra mora imati bar 4 karaktera.');
      return;
    }

    this.user.password = this.newPassword;
    this.updateLocalStorage();
    alert('Šifra uspešno promenjena.');
    this.showChangePassword = false;
    this.oldPassword = '';
    this.newPassword = '';
  }

  updateProfile() {
    if (!this.updatedEmail.includes('@')) {
      alert('Unesite validan email.');
      return;
    }

    this.user.email = this.updatedEmail;
    this.updateLocalStorage();
    alert('Email uspešno ažuriran.');
    this.showUpdateProfile = false;
    this.updatedEmail = '';
  }

  updateLocalStorage() {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userIndex = users.findIndex((u: any) => u.username === this.user.username);

    if (userIndex !== -1) {
      users[userIndex] = this.user;
      localStorage.setItem('users', JSON.stringify(users));
      this.authService.updateUser(this.user);
    }
  }
}

