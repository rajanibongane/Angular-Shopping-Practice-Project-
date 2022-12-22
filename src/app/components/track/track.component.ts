import { Component, OnInit } from '@angular/core';
import { Subscription, timer} from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit{


 obsMsg;
 nextMsg;
 Msg;
 messageStop: Subscription; 
constructor(private cartServices:CartService){}

public products : any = []
ngOnInit(): void {
  this.cartServices.getProductsOrders().subscribe(res=>{
    this.products=res;
  })
  
  const message = timer(2000);
  this.messageStop =message.subscribe(res=>{
    console.log(res);
    this.obsMsg = 'Order Packed';
    // alert("Order Dispatched");
  })

  const message2 = timer(5000);
  this.messageStop =message2.subscribe(res=>{
    console.log(res);
    this.nextMsg = 'Out for Delivery';
    
    // alert("Order Deliverd");
  })

  const message3 = timer(8000);
  this.messageStop =message3.subscribe(res=>{
    console.log(res);
    this.Msg = 'Order Deliverd';
    
    // alert("Order Deliverd");
  })

}
}
