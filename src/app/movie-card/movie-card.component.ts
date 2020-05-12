import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MovieObject} from "../movies-dashboard/types";
import { environment} from "../../environments/environment";

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.sass']
})
export class MovieCardComponent implements OnInit {
  imgUrl = environment.imageUrl;
  active = false;
  isMobile: boolean;

  @Input() movie:MovieObject;
  @Output() openMovieDetails = new EventEmitter<{action:boolean, movie?: MovieObject}>();
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
  }

  openScrollableContent = (longContent) => {
    this.modalService.open(longContent, { scrollable: true });
  }

  openMovie = ({content}) => {
    this.isMobile = window.screen.availWidth <= 768;
    if(!this.isMobile) {
      this.active = !this.active
      this.openMovieDetails.emit({action: this.active, movie: this.movie});
    }
    else {
      this.openScrollableContent(content)
    }
  }
}
