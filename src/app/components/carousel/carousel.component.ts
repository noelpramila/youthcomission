import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  constructor() { }

  ngOnInit(): void {
    this.slides[0] = {
      id: 0,
      src: 'assets/images/caro1.jpg',
      title: 'Annaiyin Aravanaipil Celebrations @ Perambur Vicariate',
      subtitle: 'Let us run to Mary, and, as her little children, cast ourselves into her arms with a perfect confidence.'
    };
    this.slides[1] = {
      id: 1,
      src: 'assets/images/Image2.jpg',
      title: '24 Hours Thanks Giving Mass Celebrations @ Manali Vicariate',
      subtitle: 'It Would be easier for the world to survive without the sun than to do so without the sun than to do so without the Holy Mass.'
    }
    this.slides[2] = {
      id: 2,
      src: 'assets/images/caro2.jpeg',
      title: 'Youth Rally at Annai Velankanni Shrine',
      subtitle: 'You cannot be half a saint; you must be a whole saint or no saint at all.'
    }
  }

}