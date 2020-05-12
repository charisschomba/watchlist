import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { MovieObject} from "../movies-dashboard/types";
import { environment} from "../../environments/environment";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  imgUrl = environment.imageUrl;
  @Input() movie:MovieObject;
  @Output() openMovieDetails = new EventEmitter<{action:boolean, movie?: MovieObject}>();
  constructor() { }

  ngOnInit(): void {
  }
  openMovie = () => {
    console.log(this.movie)
    this.openMovieDetails.emit({action: true, movie: this.movie});
  }
}
