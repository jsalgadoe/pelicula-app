import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {movie} from "../../interfaces/cartelera-reponse";
import {StarRatingComponent} from "ng-starrating";
import {Router} from "@angular/router";

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {


  @Input() peliculas:movie[] = [];
  constructor( private route: Router) { }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue},
      New Value: ${$event.newValue},
      Checked Color: ${$event.starRating.checkedcolor},
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }

  onMovieClick( movie:movie) {
    console.log(movie);
    this.route.navigate(['/pelicula',movie.id]);
  }


}
