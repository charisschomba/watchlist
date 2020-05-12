import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MoviesDashboardComponent } from './movies-dashboard/movies-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesDashboardComponent,
    MovieCardComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RoundProgressModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
