import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

import { map } from 'rxjs/operators';



@Injectable
({

  providedIn: 'root'

})

export class AuthService 
{
  constructor(private http : HttpClient,private jwtHelper: JwtHelperService, public router: Router) { }



  loginX(model:any)
  {

    const BaseUrl = 'https://localhost:5001/api/Login/Login';

    console.log("Model : Login",model);

    return  this.http.post(BaseUrl, model).pipe
    (

      map((Response:any) =>
      {
        const user = Response;

        if(user){
          localStorage.setItem('token' , user.token);
          this.router.navigate(['home']);
        }

      })

    )

  }
 // ...
 public isAuthenticated(): boolean {
   
   const token = localStorage.getItem('token') as string |undefined;    // Check whether the token is expired and return
 // true or false
 return !this.jwtHelper.isTokenExpired(token);
}



  // RegisterX(model:any)
  // {

    
  //    console.log("Model : Login",model);

  //    const RegisterBaseUrl = 'http://localhost:57723/api/Auth/Register';

  //   return this.http.post(RegisterBaseUrl, model).pipe
  //   (

  //     map((Response:any) =>
  //     {
  //       const user = Response;

  //       if(user){localStorage.setItem('token' , user.token);}

  //     })

  //   )


  // }

  public getToken(): string {

   return localStorage.getItem('token') as string;
  }
  }
