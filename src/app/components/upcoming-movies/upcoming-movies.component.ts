import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { UpcomingMoviesService } from '../../core/services/upcoming/upcoming-movies.service'; // ✅ Ispravljena putanja

@Component({
  selector: 'app-upcoming-movies',
  standalone: true,
  imports: [CommonModule],
  providers: [UpcomingMoviesService, DatePipe], // ✅ Dodato ovde
  templateUrl: './upcoming-movies.component.html',
  styleUrls: ['./upcoming-movies.component.css']
})
export class UpcomingMoviesComponent implements OnInit {
  upcomingMovies: any[] = [];

  constructor(private upcomingMoviesService: UpcomingMoviesService) {}

  ngOnInit(): void {
    this.upcomingMovies = this.upcomingMoviesService.getUpcomingMovies();
    console.log('Nadolazeći filmovi:', this.upcomingMovies);
  }

  getUpcomingMovies(): void {
    this.upcomingMovies = this.upcomingMoviesService.getUpcomingMovies();
  }
}

