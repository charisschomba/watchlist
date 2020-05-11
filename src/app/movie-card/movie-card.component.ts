import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  @Output() openMovieDetails = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }
  openMovie = () => {
    this.openMovieDetails.emit(true)
  }
}
