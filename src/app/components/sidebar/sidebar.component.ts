import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public totalItemCart : number = 0;
  public totalItemWishlist : number = 0;
  public totalItemOrders : number = 0;
  constructor(private cartService : CartService){}

  ngOnInit(): void {
    this.cartService.getProductsCart().subscribe(res=>{
      this.totalItemCart = res.length;
    })
    this.cartService.getProductsWishlist().subscribe(res=>{
      this.totalItemWishlist = res.length;
    })
    this.cartService.getProductsOrders().subscribe(res=>{
      this.totalItemOrders = res.length;
    })
  }

}
