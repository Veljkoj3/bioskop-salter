import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpcomingMoviesService {

  constructor() { }

  getUpcomingMovies() {
    return [
      {
        title: 'Anora',
        releaseDate: new Date('2025-05-15'),
        poster: 'assets/images/movies/film1.jpg'
      },
      {
        title: 'Bridžet Džouns: Luda za njim',
        releaseDate: new Date('2025-06-10'),
        poster: 'assets/images/movies/film2.jpg'
      },
      {
        title: 'Brutalista',
        releaseDate: new Date('2025-07-01'),
        poster: 'assets/images/movies/film3.jpg'
      },
      {
        title: 'Opaki Radnik',
        releaseDate: new Date('2025-08-02'),
        poster: 'assets/images/movies/film4.jpg'
      },
      {
        title: 'Poslednji krug momci',
        releaseDate: new Date('2025-09-03'),
        poster: 'assets/images/movies/film5.jpg'
      },
      {
        title: 'Požuda',
        releaseDate: new Date('2025-10-16'),
        poster: 'assets/images/movies/film6.jpg'
      }
    ];
  }
}
