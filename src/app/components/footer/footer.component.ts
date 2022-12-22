import { Component, OnInit } from '@angular/core';
import { ngbCarouselTransitionOut } from '@ng-bootstrap/ng-bootstrap/carousel/carousel-transition';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  
  // LocalDate : string = new Date().toLocaleDateString();
  currentYear: number=new Date().getFullYear();
  constructor(){}
  ngOnInit(): void {
    
  }
}
