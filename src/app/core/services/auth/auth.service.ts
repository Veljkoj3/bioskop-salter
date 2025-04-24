import { Injectable } from '@angular/core';

interface User {
  username: string;
  email: string;
  password: string;
  reservations: {movieTitle: string, date: string} [] // Niz rezervacija (može biti niz ID-eva filmova)
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users: User[] = [];
  private loggedInUser: User | null = null;

  register(username: string, email: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.some((user: User) => user.username === username);
    if (userExists) {
      return false;
    }
    const newUser: User = { username, email, password, reservations: [] };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users)); // Snimanje u localStorage
    return true;
  }
  
  login(username: string, password: string): boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.username === username && u.password === password);
  
    if (user) {
      this.loggedInUser = user; // Ažuriraj promenljivu
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      console.log('Uspešno prijavljen:', user);
      return true;
    }
  
    console.log('Neuspešna prijava.');
    return false;
  }
  
  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('loggedInUser');
  }

  getCurrentUser(): User | null {
    return this.loggedInUser;
  }

  isLoggedIn(): boolean {
    return this.loggedInUser !== null;
  }

  getLoggedInUser(): User | null {
    const userData = localStorage.getItem('loggedInUser');
    if (userData) {
      const user = JSON.parse(userData);
      // Ako rezervacije nisu definisane, inicijalizuj kao prazan niz
      if (!user.reservations) {
        user.reservations = [];
      }
      return user;
    }
    return null;
  }
  
  addReservation(movieTitle: string, date: string): void {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const currentUser = this.getLoggedInUser();
  
    if (currentUser) {
      // Pronađi korisnika u nizu
      const userIndex = users.findIndex((user: User) => user.username === currentUser.username);
      if (userIndex !== -1) {
        // Dodaj rezervaciju trenutnom korisniku
        const newReservation = { movieTitle, date };
        users[userIndex].reservations.push(newReservation);
  
        // Ažuriraj podatke o korisniku i ulogovanog korisnika
        this.loggedInUser = users[userIndex];
        localStorage.setItem('users', JSON.stringify(users));
        localStorage.setItem('loggedInUser', JSON.stringify(users[userIndex]));
  
        console.log('Dodato u rezervacije:', users[userIndex].reservations);
      } else {
        console.log('Korisnik nije pronađen.');
      }
    }
  }
    
  updateUser(updatedUser: User): void {
    this.loggedInUser = updatedUser;
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUser));
  }
}

