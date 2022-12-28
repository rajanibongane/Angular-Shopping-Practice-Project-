import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit{
  public products : any = []
  public grandTotal !: number;
  constructor(private cartService:CartService){}

  ngOnInit(): void {
    this.cartService.getProductsWishlist().subscribe(res=>{
      this.products=res;
      this.grandTotal = this.cartService.getTotalPriceWishlist();
    })
  }
  removeItem(item:any){
    this.cartService.removeWishlistItem(item);
  }
  emptycart(){
    this.cartService.removeAllWishlist();
  }
  getTotalprice(){
    this.cartService.getTotalPriceWishlist();
  }
}



