import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  roadtripSrc;
  x;
  constructor(
  ) { }
  
  ngOnInit() {
    this.roadtripSrc = '../../assets/img/road-trip-orange.jpg';
    this.flickerRoadSign();
    setInterval(() => {
      this.flickerRoadSign();
    },100)
  }

  flickerRoadSign(){
  
      if(this.roadtripSrc == '../../assets/img/road-trip.jpg'){
        this.roadtripSrc = '../../assets/img/road-trip-orange.jpg';
      }
      else if(this.roadtripSrc == '../../assets/img/road-trip-orange.jpg'){
        this.roadtripSrc = '../../assets/img/road-trip.jpg';
      }
  }

  

}
