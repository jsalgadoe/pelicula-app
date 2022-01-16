import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Cast} from "../../interfaces/ credits-response";
import Swiper from "swiper";

@Component({
  selector: 'app-cast-slideshow',
  templateUrl: './cast-slideshow.component.html',
  styleUrls: ['./cast-slideshow.component.css']
})
export class CastSlideshowComponent implements OnInit,AfterViewInit {

  @Input() cast:Cast[] = [];

  constructor() { }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper', {
      freeMode:true,
      spaceBetween: 15,
      slidesPerView: 5.3
    });
  }

  ngOnInit(): void {
    console.log(this.cast);
  }

}
