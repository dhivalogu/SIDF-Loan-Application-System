import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { LoginResponse } from "../login/login-response.model";
import { Router } from "@angular/router";
@Injectable()
export class LoginService
{
    constructor(private http:HttpClient,private router:Router){}

    login(loginData:Object)
    {
        var authSuccess:Boolean=false;
        console.log(loginData);
        this.http.post<LoginResponse>("http://localhost:3000/login",loginData).subscribe
      (
        (responseData)=>{
          console.log(responseData);
          if(responseData.code == '1')
          {
              authSuccess=true;
              this.router.navigate(['dashboard']);
              console.log(authSuccess);
              
          }
          else
          {
            alert("Enter valid User ID/Password")
          }

        }
      );

      
    }
}