import { Component, OnInit } from '@angular/core';
import { MoviesDashboardService } from './movies-dashboard.service'
import { MovieObject} from './types'
@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.sass']
})
export class MoviesDashboardComponent implements OnInit {
  openDetail = false;
  movieDetails: MovieObject;
  movies: [MovieObject];
  loading: boolean = false;

  constructor(private movieService: MoviesDashboardService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.movieService.getMovies().subscribe((movies: any) => {
        this.movies = movies.items;
        this.loading= false;
      },
      (e) => {
        this.loading= false;
        console.log(e)
      })
  }

  handleMovieDetails = ({action, movie}) => {
    this.openDetail = action;
    this.movieDetails = movie;
  }
}
