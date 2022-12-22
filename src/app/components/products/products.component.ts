import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  // products:any[];
  productList:any;
  public filterCategory : any;

  searchkey:string="";
  constructor( private api:ApiService, private cartService : CartService){}

  ngOnInit(): void { 
    
    this.api.getProduct().subscribe(res=>{
      this.productList=res;
      this.filterCategory = res;

      this.productList.forEach((a:any)=>{
      if(a.category==="women's clothing" || a.category==="men's clothing"){
        a.category="fashion"
      }
        Object.assign(a,{quantity:1,total:a.price});
      });
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchkey = val;
    })
  }
  // savecart(){
  //   localStorage.setItem('cart_item',JSON.stringify(this.products))
  // }
  addtoCart(item:any){
    this.cartService.addtoCart(item);

    // this.cartService.savecart();
  }
  addtoWishlist(item:any){
    this.cartService.addtoWishlist(item);
  }
  filter(category:string){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  }
}
