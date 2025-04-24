import { Component } from '@angular/core';
import { CartService } from '../core/services/cart/cart.service';
import { Movie } from '../models/movie.model';
import { CommonModule } from '@angular/common';
import { AuthService } from '../core/services/auth/auth.service';


@Component({
  selector: 'app-korpa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './korpa.component.html',
  styleUrls: ['./korpa.component.css']
})
export class KorpaComponent {
  cart: Movie[] = [];

  constructor(private cartService: CartService, private authService: AuthService) {
    this.cart = this.cartService.getCart();
  }

  clearCart() {
    this.cartService.clearCart();
    this.cart = [];
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, movie) => total + movie.price, 0);
  }

  confirmReservation() {
    const currentUser = this.authService.getLoggedInUser();

    if (currentUser) {
      for (const movie of this.cart) {
        
        const alreadyReserved = currentUser.reservations.some((reservation: any) => reservation.movieTitle === movie.title);

        if (alreadyReserved) {
          alert(`Film "${movie.title}" je već rezervisan!`);
        } else {
         
          this.authService.addReservation(movie.title, new Date().toLocaleDateString('sr-RS'));
          alert(`Uspešno rezervisan film: ${movie.title}`);
        }
      }
      this.clearCart();  
    }
  }

}  