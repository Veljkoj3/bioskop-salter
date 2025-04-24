import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../core/services/movie/movie.service';
import { ReservationService } from '../core/services/reservation/reservation.service';
import { Movie } from '../models/movie.model';
import { CommonModule } from '@angular/common';
import { CartService } from '../core/services/cart/cart.service';
import { AuthService } from '../core/services/auth/auth.service';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detalji-filma',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './detalji-filma.component.html',
  styleUrls: ['./detalji-filma.component.css']
})
export class DetaljiFilmaComponent implements OnInit {
  movie: Movie | undefined;
  rating: number = 0;
  averageRating: number = 0;
  hoverRating = 0;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private cartService: CartService,
    private reservationService: ReservationService,
    public authService: AuthService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.movie = this.movieService.getMovieById(id);

    if (this.movie) {
      this.averageRating = this.movieService.getAverageRating(this.movie);
    }
  }

  goBack() {
    this.location.back();
  }

  addToCart(): void {
    if (this.movie) {
      this.cartService.addToCart(this.movie);
      alert(`Uspešno ste dodali film: ${this.movie.title} u korpu!`);
    }
  }

  addReservation(): void {
    if (this.movie) {
      this.reservationService.reserveMovie(this.movie);
      alert(`Uspešno ste rezervisali film: ${this.movie.title}!`);
    }
  }

  setRating(star: number): void {
    this.rating = star;
  }

  submitRating(): void {
    if (!this.authService.isLoggedIn()) {
      alert("Morate biti prijavljeni da biste ocenili film.");
      return;
    }

    if (this.movie) {
      this.movieService.rateMovie(this.movie.id, this.rating);
      alert("Hvala što ste ocenili film!");
      this.averageRating = this.movieService.getAverageRating(this.movie);
    }
  }
}
