import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // public filterCategory : any;
  products:any[];
  public productList:any[];
  public filterCategory:any[];
  public wishlistItemList : any=[]
  public cartItemList : any=[]
  public orderItemList : any=[]
  public trackItemList : any=[]
  public productListWishlist = new BehaviorSubject<any>([]);
  public productListCart = new BehaviorSubject<any>([]);
  public productListOrders = new BehaviorSubject<any>([]);
  public productListTrack = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");

  constructor() { }
  getProductsCart(){
    return this.productListCart.asObservable();
  }
  getProductsTrack(){
    return this.productListTrack.asObservable();
  }
  getProductsWishlist(){
    return this.productListWishlist.asObservable();
  }
  getProductsOrders(){
    return this.productListOrders.asObservable();
  }

  setProduct(product:any){
    this.cartItemList.push(...product);
    this.productListCart.next(product);

  }
  setProductWishlist(product:any){
    this.wishlistItemList.push(...product);
    this.productListWishlist.next(product);

  }

  addtoCart(product:any){
    this.cartItemList.push(product);
    this.productListCart.next(this.cartItemList);
    this.getTotalPrice();
  }
  addtoOrder(product:any){
    this.cartItemList.push(product);
    this.productListCart.next(this.cartItemList);
    this.getTotalPrice();
  }

  addtoWishlist(product:any){
    this.wishlistItemList.push(product);
    this.productListWishlist.next(this.wishlistItemList);
    this.getTotalPrice();

  }

  getTotalPrice():number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  getTotalPriceWishlistr():number{
    let grandTotal = 0;
    this.wishlistItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }

  removeCartItem(product:any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.cartItemList.splice(index,1);
      }
    })
  }

  removeWishlistItem(product:any){
    this.wishlistItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        this.wishlistItemList.splice(index,1);
      }
    })
  }

  removeAllCart(){
    this.cartItemList = []
    this.productListCart.next(this.cartItemList)
  }

  removeAllWishlist(){
    this.wishlistItemList = []
    this.productListWishlist.next(this.wishlistItemList)
  }
  buy(product:any){
    this.orderItemList.push(product);
    this.productListOrders.next(this.orderItemList);
    this.getTotalPrice();
  }
  track(product:any){
    this.trackItemList.push(product);
    this.productListOrders.next(this.trackItemList);
  }
  filter(category:string){
    this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
        return a;
      }
    })
  } 
}
