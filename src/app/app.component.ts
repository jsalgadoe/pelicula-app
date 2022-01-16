import { Component } from '@angular/core';
import {MoviesService} from "./services/movies.service";
import {Cartelera} from "./interfaces/cartelera-reponse";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculaApp';


  constructor() {

  }
}
