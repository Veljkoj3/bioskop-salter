import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie/movie.service';
import { Movie } from '../models/movie.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pretraga',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './pretraga.component.html',
  styleUrls: ['./pretraga.component.css']
})
export class PretragaComponent implements OnInit {
  query: string = '';
  searchResults: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {}

  onSearch(): void {
    this.searchResults = this.movieService.searchMovies(this.query);
  }
}

