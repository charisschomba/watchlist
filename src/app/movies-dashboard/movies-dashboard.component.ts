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
  responsive: boolean;
  mobile = 800;

  constructor(private movieService: MoviesDashboardService) {
  }

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
    this.responsive = true;
    this.mobile = window.screen.availWidth
    this.openDetail = action;
    this.movieDetails = movie;
    console.log("sasa", this.responsive, this.mobile, this.openDetail, this.responsive && this.responsive === this.mobile <= 768 && this.openDetail)
  }
}
