import { Injectable } from '@angular/core';
import { Movie } from '../../../models/movie.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations: Movie[] = [];

  constructor(private authService: AuthService) {}

  reserveMovie(movie: Movie): void {
    const currentUser = this.authService.getLoggedInUser();
    if (currentUser) {
      if (!currentUser.reservations) {
        currentUser.reservations = [];
      }
  
      // Kreiramo novu rezervaciju
      const today = new Date();
      const formattedDate = today.toLocaleDateString('sr-RS');
      const newReservation = {movieTitle: movie.title, date: formattedDate};
      currentUser.reservations.push(newReservation);
  
      localStorage.setItem('loggedInUser', JSON.stringify(currentUser));
      
      // Log za proveru
      console.log('Dodato u rezervacije:', currentUser.reservations);
    } else {
      console.log('Nema prijavljenog korisnika!');
    }
  }
  
  getReservations(): Movie[] {
    return this.reservations;
  }
}
