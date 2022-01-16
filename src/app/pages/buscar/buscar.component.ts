import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {movie} from "../../interfaces/cartelera-reponse";

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute,
               private peliculaService: MoviesService) { }

  texto:string = "";
  peliculas:movie[] = []

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        params.texto
        this.texto = params.texto;
        console.log(params.texto);
        this.peliculaService.searchPelicula(params.texto).subscribe(
          movies => this.peliculas = movies
        )
      }
    )
  }

}
