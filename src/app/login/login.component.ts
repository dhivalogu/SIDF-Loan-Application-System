import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginResponse } from './login-response.model';
import { LoginService } from '../services/login.service';
import { FormControl,Validators,FormGroup } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  //assets
  logo:string='assets/images/sidf_logo_en.svg';
  vision_logo:string='assets/images/vision_2030_logo.svg';
  appStore:string='assets/images/app-store.svg';
  playStore:string='assets/images/google-play.svg';

  //Reactive form-group
  loginForm=new FormGroup(
    {
      user_id:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    }
  );

  wrongPassword:Boolean=false;
  

  constructor(private http:HttpClient,private router:Router,public loginService:LoginService,private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  //authenticate the credentials by posting data to the server
 login()
  {
      this.spinner.show();
      const credential={
        user_id:this.loginForm.get('user_id')?.value,
        password:this.loginForm.get('password')?.value
      };
      this.loginService.login(credential); 
      this.spinner.hide();   
  }

  get user_id():any
  {
      return this.loginForm.get('user_id');
  }
  get password():any
  {
      return  this.loginForm.get('password');
  }
  check()
  {
    alert('Success');

  }
}
