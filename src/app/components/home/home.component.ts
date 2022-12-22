import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public filterCategory : any;

  productList:any;
  constructor(private CartService : CartService){}
  filter(category:string){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }  
}
