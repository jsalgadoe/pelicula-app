import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MoviesService} from "../../services/movies.service";
import {MovieDetail} from "../../interfaces/movie-response";
import {Location} from "@angular/common";
import {Cast} from "../../interfaces/ credits-response";
import {combineLatest} from "rxjs";

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie:MovieDetail | any ;
  public cast: Cast[] = [];
  constructor(private Activated:ActivatedRoute,
              private movieService:MoviesService,
              private location:Location,
              private  route:Router) { }

  ngOnInit(): void {
    const id = this.Activated.snapshot.params.id;

    combineLatest([
      this.movieService.getPeliculaDetail(id),
      this.movieService.getCast(id)
    ]).subscribe( ([pelicula,cast]) => {
      if (!pelicula){
        this.route.navigateByUrl('/home')
        return;
      }
      this.movie = pelicula

      let filters = cast.filter( actor => actor.profile_path != null );
      this.cast = filters
      }

    )

    /*this.movieService.getPeliculaDetail(id).subscribe(

      movie => {
        if (!movie){
          this.route.navigateByUrl('/home')
          return;
        }
        this.movie = movie
      }
    )*/

    /*
    this.movieService.getCast(id).subscribe( cast => {
      let filter = cast.filter( actor => actor.profile_path != null );
      this.cast = filter

    })*/
  }


  Regresar(){
    this.location.back();
  }
}
