import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {MoviesService} from "../../services/movies.service";
import {movie} from "../../interfaces/cartelera-reponse";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  public peliculas:movie[] = [];
  public moviesSlideShow:movie[] = [];

@HostListener('window:scroll',['$event'])
onScroll(){
  const pos = (document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
  const max = (document.documentElement.scrollHeight|| document.body.scrollHeight );


  if(pos> max){
    if (this.moviesService.cargando){
      return;
    }
    this.moviesService.getMovies().subscribe( pelicula => {
      this.peliculas.push(...pelicula);
    })
  }

}
  constructor(private moviesService:MoviesService) {
    this.moviesService.getMovies().subscribe(
      (movies) => {
        this.moviesSlideShow =  movies
       this.peliculas =  movies
      }
    )
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
  this.moviesService.resetCartelera();
  }



}
