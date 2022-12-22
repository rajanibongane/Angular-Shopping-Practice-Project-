import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

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
  addtoOrder(item:any){
    this.cartServices.buy(item);
    alert("Order placed Successfull");
  }
}
