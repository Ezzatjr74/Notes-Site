import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form;
  getusers;
  getlogin:any;
  login = {};
  allusers:any;
  useremail: any;
  userpass: any;
  user: any;
  check: any;
  
  constructor(public _ActivatedRoute:ActivatedRoute) {
    let email = new FormControl('', [Validators.required,CustomValidators.email]);
    let password = new FormControl('', [Validators.required]);
    this.form = new FormGroup({
      email: email,
      password: password
    })
    this.getusers = sessionStorage.getItem('dbusers');
    this.allusers = JSON.parse(`${this.getusers}`)
  }


  public sendlogin()
  {
    this.getlogin = sessionStorage.getItem('loginUser');
     this.login = JSON.parse(this.getlogin);
     this.user = this.login;
     this.useremail =this.user.email;
     this.userpass = this.user.password
     console.log(this.user)
  }

  public checkemail(email: { value: any; }, password: any):any
   {
    for (let user of this.allusers) {
      if (email.value == user.email && password.value == user.password) {
        sessionStorage.removeItem('loginUser')
        sessionStorage.setItem( 'loginUser',JSON.stringify(user))
        this.sendlogin()
      }
    }
  }
  ngOnInit(): void {
  }

}
