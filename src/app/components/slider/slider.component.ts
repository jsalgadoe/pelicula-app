import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {movie} from "../../interfaces/cartelera-reponse";
import Swiper from "swiper";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit,AfterViewInit {

  @Input() peliculas:movie[] = [];
  public swiper: Swiper =  new Swiper('');
  constructor() {

  }

  ngOnInit(): void {

  }



  ngAfterViewInit(){
  console.log(this.peliculas);
   const swiper = new Swiper('.swiper', {
      // Optional parameters

      loop: true,


      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

   this.swiper =  swiper;
  }

  onNext(){
    this.swiper.slideNext();
  }

  onPrev(){
    this.swiper.slidePrev();
  }
}
