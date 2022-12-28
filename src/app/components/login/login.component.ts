import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  user:any;
  public loginForm!:FormGroup;
  constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router
    ){

  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signup").subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
       })

       if(user){
        alert("Login Successfull");
        this.http.post<any>("http://localhost:4200",this.loginForm.value)
        localStorage.setItem('user',JSON.stringify(this.loginForm.value))
        this.loginForm.reset();
        this.router.navigate(['home'])
       }else{
        alert("User Not Found")
       }
      },err=>{
        alert("Something went wrong.")
      }
      )
  }
  }

