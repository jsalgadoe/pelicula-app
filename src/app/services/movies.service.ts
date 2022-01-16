import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import {Cartelera, movie} from "../interfaces/cartelera-reponse";
import {catchError, map, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {MovieDetail} from "../interfaces/movie-response";
import {Cast, CreditsResponse} from "../interfaces/ credits-response";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  URL = "https://api.themoviedb.org/3"
  cargando:boolean = false;
  constructor(private http:HttpClient) {

  }

  private cartelarapAGE = 1

  get params(){
    return {
      api_key: '4d724a0819e4de1532b618bbd32b0e5b',
      language: 'es-ES',
      page: this.cartelarapAGE.toString()

    }
  }

  getMovies():Observable<movie[]>{

    if (this.cargando){
      return  of([]);
    }

    this.cargando = true;
    return this.http.get<Cartelera>(`${this.URL}/movie/now_playing`,{
      params: this.params
    }).pipe(
      map( (resp) => resp.results),
      tap( () => {

        this.cartelarapAGE += 1
        this.cargando = false
      }),

    )
  }

  searchPelicula(texto:string){
    const params = {...this.params,page: '1',query:texto}
  return this.http.get<Cartelera>(`${this.URL}/search/movie`,{
     params: params
   }).pipe(
     map(resp => resp.results)
   )

  }

  getPeliculaDetail(id:string){
    return this.http.get<MovieDetail>(`${this.URL}/movie/${id}`,{
      params: this.params
    }).pipe(
      catchError(err => of(null))
    )
  }

  resetCartelera(){
   this.cartelarapAGE = 1;
  }


  /**/

  getCast(id:string):Observable<Cast[]>{
    return this.http.get<CreditsResponse>(`${this.URL}/movie/${id}/credits`,{
      params: this.params
    }).pipe(
      map( resp => resp.cast),
      catchError(err => of([]))

    )
  }



}
