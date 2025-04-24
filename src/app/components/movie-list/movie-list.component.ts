import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie/movie.service';
import { Movie } from '../../models/movie.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReservationService } from '../../core/services/reservation/reservation.service';
import { CartService } from '../../core/services/cart/cart.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private movieService: MovieService, private reservationService: ReservationService, private cartService: CartService) {
    console.log("✅ MovieListComponent constructor called!");
  }

  ngOnInit(): void {
    console.log("✅ MovieListComponent ngOnInit called!");
    this.movies = this.movieService.getMovies();
    console.log(this.movies);
  }

  reserveMovie(movie: Movie): void {
    this.reservationService.reserveMovie(movie);
    alert(`Uspešno ste rezervisali kartu za film: ${movie.title}`);
  }

  reserveTicket(movie: Movie) {
    this.cartService.addToCart(movie);
    alert(`Film "${movie.title}" je dodat u korpu!`);
  }
}

