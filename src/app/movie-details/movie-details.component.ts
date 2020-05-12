import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MovieObject } from '../movies-dashboard/types';
import { environment} from "../../environments/environment";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  @Output() closeMovieDetails = new EventEmitter<{ action: boolean, movie?: object }>();
  @Input() movie: MovieObject;
  @Input() showCancelBtn: boolean = true;
  imgUrl = environment.imageUrl;
  constructor() { }

  ngOnInit(): void {
  }

  handleCloseMovieDetails = () => {
    console.log(this.movie)
    this.closeMovieDetails.emit({action: false})
  };
}
