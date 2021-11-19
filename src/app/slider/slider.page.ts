import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.page.html',
  styleUrls: ['./slider.page.scss'],
})
export class SliderPage  {

  slides =[
    {
      img: '/./src/assets/img/ubicacion actual.jpg',
      text: 'Visible changes<br>in 3 weeks'
    },
    {
      img: '/./src/assets/img/ubicacion actual.jpg',
      text: 'forget about<br>strict diet'
    },
    {
      img: '/./src/assets/img/ubicacion actual.jpg',
      text: 'Save money on<br>gym membership'
    }
  ];

}
