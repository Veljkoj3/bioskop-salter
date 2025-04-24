export interface Movie {
    id: number;
    title: string;
    description: string;
    genre: string;
    duration: number;
    director: string;
    actors: string[];
    releaseDate: string;
    showtimes: string[];
    price: number;
    reviews: { user: string; comment: string; rating: number }[];
    imageUrl: string;
    ratings?: number[];
  }
  