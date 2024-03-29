import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isFilter = false;
  public filterCategory : any;
  productList:any[];
  searchkey:string="";
  name :any;
  public searchTerm : string='';
  constructor(private CartService : CartService, private api:ApiService, private router:Router, private http: HttpClient ){}
  
  
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
    this.CartService.search.subscribe((val:any)=>{
      this.searchkey = val;
    })
    // this.CartService.search.subscribe((category:any)=>{
    //   this.searchkey = category;
    // })
    
  }
  // filter(category:any){
  //   localStorage.setItem('filterCatgory', category);
  //   this.filterCategory=this.productList.filter((a:any)=>{
  //     if(a.category == category || category==''){
  //     return a;
  //     }
  // })
  //   console.log("Selected category => ", this.filterCategory);
  // } 
  // getfilter(){
  //   this.filterCategory=this.CartService.productList
  //   this.CartService.filterCategory = this.productList;
  //   }

    search(event:any){
      this.searchTerm=(event.target as HTMLInputElement).value;
      this.CartService.search.next(this.searchTerm);
  }
    logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  filter(category:any){
  this.filterCategory=this.productList.filter((a:any)=>{
      if(a.category == category || category==''){
      return a;
      }
    })
  } 

  addtoCart(item:any){
    this.CartService.addtoCart(item);

  }
  addtoWishlist(item:any){
    this.CartService.addtoWishlist(item);
  }
  profileName(){
    this.profileName=JSON.parse(localStorage.getItem("name"));
    console.log(this.profileName)
    return this.name;
   }
}


