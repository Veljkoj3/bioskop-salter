import { Injectable } from '@angular/core';
import { Movie } from '../../../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'Inception',
      description: 'A mind-bending thriller by Christopher Nolan.',
      genre: 'Sci-Fi',
      duration: 148,
      director: 'Christopher Nolan',
      actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ellen Page'],
      showtimes: ['2025-03-20 18:00', '2025-03-20 21:00'],
      releaseDate: '2025-11-1',
      price: 500,
      reviews: [{ user: 'Marko', comment: 'Odličan film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/inception.jpg'
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A classic sci-fi action movie.',
      genre: 'Sci-Fi',
      duration: 136,
      director: 'Lana Wachowski, Lilly Wachowski',
      actors: ['Keanu Reeves', 'Laurence Fishburne', 'Carrie-Anne Moss'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 400,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/Matrix.jpg'
    },
    {
      id: 3,
      title: 'Interstellar',
      description: 'A team travels through a wormhole in space.',
      genre: 'Adventure, Drama, Sci-Fi',
      duration: 169,
      director: 'Christopher Nolan',
      actors: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 450,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/Interstellar.jpg'
    },
    {
      id: 4,
      title: 'Avatar',
      description: 'A marine on an alien planet.',
      genre: 'Action, Adventure, Fantasy',
      duration: 162,
      director: 'James Cameron',
      actors: ['Sam Worthington', 'Zoe Saldana', 'Sigourney Weaver'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 480,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/avatar.jpg'
    },
    {
      id: 5,
      title: 'The Dark Knight',
      description: 'Batman faces the Joker.',
      genre: 'Action, Crime, Drama',
      duration: 152,
      director: 'Christopher Nolan',
      actors: ['Christian Bale', 'Heath Ledger', 'Aaron Eckhart'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 470,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/The-dark-knight.jpg'
    },
    {
      id: 6,
      title: 'Gladiator',
      description: 'A former Roman General sets out to exact vengeance.',
      genre: 'Action, Adventure, Drama',
      duration: 155,
      director: 'Ridley Scott',
      actors: ['Russell Crowe', 'Joaquin Phoenix', 'Connie Nielsen'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 420,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/gladiator.jpg'
    },
    {
      id: 7,
      title: 'Titanic',
      description: 'A love story unfolds aboard the ill-fated RMS Titanic.',
      genre: 'Drama, Romance',
      duration: 195,
      director: 'James Cameron',
      actors: ['Leonardo DiCaprio', 'Kate Winslet', 'Billy Zane'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 460,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/titanic.jpg'
    },
    {
      id: 8,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen and others intertwine.',
      genre: 'Crime, Drama',
      duration: 154,
      director: 'Quentin Tarantino',
      actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 430,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/pulp-fiction.jpg'
    },
    {
      id: 9,
      title: 'Forrest Gump',
      description: 'The story of a man with a low IQ who lived an extraordinary life.',
      genre: 'Drama, Romance',
      duration: 142,
      director: 'Robert Zemeckis',
      actors: ['Tom Hanks', 'Robin Wright', 'Gary Sinise'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 410,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/forrest-gump.jpg'
    },
    {
      id: 10,
      title: 'The Lord of the Rings',
      description: 'A hobbit and his companions set out to destroy the One Ring.',
      genre: 'Adventure, Fantasy',
      duration: 178,
      director: 'Peter Jackson',
      actors: ['Elijah Wood', 'Ian McKellen', 'Orlando Bloom'],
      showtimes: ['2025-03-21 17:00', '2025-03-21 20:00'],
      releaseDate: '2025-11-1',
      price: 490,
      reviews: [{ user: 'Jovan', comment: 'Kultni film!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/the-lord.jpg'
    },
    {
      id: 11,
      title: 'Joker',
      description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society.',
      genre: 'Drama, Thriller',
      duration: 122,
      director: 'Todd Phillips',
      actors: ['Joaquin Phoenix', 'Robert De Niro', 'Zazie Beetz'],
      releaseDate: '2019-10-04',
      showtimes: ['2025-04-16 18:30', '2025-04-17 20:30'],
      price: 450,
      reviews: [{ user: 'Milan', comment: 'Fenomenalna gluma!', rating: 4 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/joker.jpg'
    },
    {
      id: 12,
      title: 'Whiplash',
      description: 'A promising young drummer enrolls at a cut-throat music conservatory.',
      genre: 'Drama, Music',
      duration: 106,
      director: 'Damien Chazelle',
      actors: ['Miles Teller', 'J.K. Simmons', 'Melissa Benoist'],
      releaseDate: '2014-10-10',
      showtimes: ['2025-04-20 19:30', '2025-04-21 21:00'],
      price: 420,
      reviews: [{ user: 'Filip', comment: 'Napeto i snažno!', rating: 5 }],
      imageUrl: 'assets/images/images-pogledaj-filmove/whiplash.jpg'
    }
  ];

  constructor() { }

  getMovies(): Movie[] {
    console.log("Fetching movies...");
    return this.movies;
  }

  getMovieById(id: number): Movie | undefined {
    return this.movies.find(movie => movie.id === id);
  }

  searchMovies(query: string): Movie[] {
    if (!query.trim()) {
      return [];
    }
    return this.movies.filter(movie =>
      movie.title.toLowerCase().includes(query.toLowerCase()) ||
      movie.genre.toLowerCase().includes(query.toLowerCase()) ||
      movie.actors.some(actor => actor.toLowerCase().includes(query.toLowerCase()))
    );
  }

  rateMovie(movieId: number, rating: number): void {
    const movies = this.getMovies(); // tvoja metoda za uzimanje svih filmova
    const movie = movies.find(m => m.id === movieId);

    if (movie) {
      if (!movie.ratings) {
        movie.ratings = [];
      }
      movie.ratings.push(rating);
      localStorage.setItem('movies', JSON.stringify(movies)); // čuvamo ocene
    }
  }

  getAverageRating(movie: Movie): number {
    if (!movie.ratings || movie.ratings.length === 0) return 0;
    const sum = movie.ratings.reduce((acc, r) => acc + r, 0);
    return +(sum / movie.ratings.length).toFixed(1);
  }
}

