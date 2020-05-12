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
  movieDetails: MovieObject
  movies: [MovieObject]
  constructor(private movieService: MoviesDashboardService) { }

  ngOnInit(): void {
    this.movieService.getMovies().subscribe((movies: any) => {
      console.log(movies)
      this.movies = movies.items;
    },
      (e) => {
        console.log(e)
      })
  }

  handleMovieDetails = ({action, movie}) => {
    console.log(open, movie)
    this.openDetail = action;
    this.movieDetails = movie;
  }
}
