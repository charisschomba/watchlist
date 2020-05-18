import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieObject } from '../movies-dashboard/types';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass'],
})
export class MovieDetailsComponent implements OnInit {
  @Output() closeMovieDetails = new EventEmitter<{
    action: boolean;
    movie?: MovieObject;
  }>();
  @Input() movie: MovieObject;
  @Input() showCancelBtn: boolean = true;
  imgUrl = environment.imageUrl;
  activeBtn: string = 'grade';
  constructor() {}

  ngOnInit(): void {}

  handleCloseMovieDetails = () => {
    this.closeMovieDetails.emit({ action: false });
  };
  handleClickBtn = (value: string) => {
    this.activeBtn = value;
  };
}
