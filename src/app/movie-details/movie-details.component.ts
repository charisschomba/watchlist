import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.sass']
})
export class MovieDetailsComponent implements OnInit {
  @Output() closeMovieDetails = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  handleCloseMovieDetails = () => {
    this.closeMovieDetails.emit(false)
  };
}
