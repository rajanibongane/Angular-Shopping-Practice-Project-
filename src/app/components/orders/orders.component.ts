import { Component } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
  public products : any = []
  public grandTotal !: number;
  constructor(private cartServices:CartService){}

  ngOnInit(): void {
    this.cartServices.getProductsCart().subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cartServices.getTotalPrice();
    })
  }
  removeItem(item:any){
    this.cartServices.removeCartItem(item);
  }
  emptycart(){
    this.cartServices.removeAllCart();
  }
  getTotalprice(){
    this.cartServices.getTotalPrice();
  }
  addtoTrack(item:any){
    this.cartServices.track(item);
  }

}
