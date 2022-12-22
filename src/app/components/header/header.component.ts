import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public filterCategory : any;

  name : any;
  productList:any;
  searchkey:string="";
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
  }

    search(event:any){
      this.searchTerm=(event.target as HTMLInputElement).value;
      this.CartService.search.next(this.searchTerm);
  }
  filter(item:any){
    this.CartService.addtoWishlist(item);
  }  
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
 
}


