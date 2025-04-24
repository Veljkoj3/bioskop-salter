// cart.service.ts
import { Injectable } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Movie[] = [];

  constructor(private authService: AuthService) {}

  addToCart(movie: Movie) {
    if (!this.cart.find(m => m.id === movie.id)) {
      this.cart.push(movie);
      console.log("Dodato u korpu:", movie.title);
    }
  }

  getCart() {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  confirmReservation() {
    const currentUser = this.authService.getLoggedInUser();
    if (currentUser) {
      this.cart.forEach(movie => {
        this.authService.addReservation(movie.title, new Date().toISOString());
      });
      this.clearCart();
      console.log("Rezervacija potvrđena!");
    } else {
      console.log("Nema prijavljenog korisnika!");
    }
  }
}

