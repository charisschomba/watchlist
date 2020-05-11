import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-dashboard',
  templateUrl: './movies-dashboard.component.html',
  styleUrls: ['./movies-dashboard.component.sass']
})
export class MoviesDashboardComponent implements OnInit {
  openDetail = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleMovieDetails = (event) => {
    this.openDetail = !this.openDetail;
  }

}
