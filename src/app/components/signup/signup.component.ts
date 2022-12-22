import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      name:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  signUp(){
    this.http.post<any>("http://localhost:3000/signup",this.signupForm.value)
    .subscribe(res=>{
      alert("Registration Succesfully.");
      this.http.post<any>("http://localhost:4200",this.signupForm.value)
        localStorage.setItem('username',JSON.stringify(this.signupForm.value))
      this.signupForm.reset();
      this.router.navigate(['login']);
    }, err=>{
      alert("Something Went Wrong.")
    }
    )

  }
  profileName(){
    this.http.get<any>("http://localhost:4200")
    localStorage.getItem('username');
  }
}
