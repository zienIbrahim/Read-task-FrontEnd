import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import{ AuthService} from'../Service/auth.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private AuthService: AuthService
  ) { }
  isLogin :boolean=true;
  loginForm=new FormGroup({});

  ngOnInit(): void {
    this.intForm();
  }
  login() { 
    this.isLogin=!this.isLogin
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
let userCredintial= this.loginForm.value;
console.log("user Credintial :",userCredintial);
    this.AuthService.loginX(userCredintial).subscribe(res=> console.log(res));
  }
  intForm(){
    this.loginForm = this.fb.group({
      UserName: [null ,Validators.required],
      Password: [null,Validators.required],
    });
  }

}
