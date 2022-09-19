import { Component, OnInit,Input } from '@angular/core';
import { Form,FormGroup,FormControlName, FormControl, Validators  ,FormBuilder} from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'sginup',
  templateUrl: './sginup.component.html',
  styleUrls: ['./sginup.component.css']
})
export class SginupComponent implements OnInit {
  form;
  users:any = [];
  user:any = {};
  constructor(public _ActivatedRoute:ActivatedRoute){
    console.log(_ActivatedRoute.snapshot.routeConfig?.path)
    let password = new FormControl('',Validators.required);
    let repass = new FormControl('',[Validators.required,CustomValidators.equalTo(password)]);
    this.form = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[
        CustomValidators.email,
        Validators.required
      ]),
      password: password ,
      repass:repass
    })
  }

  submit(name: { value: any; },email: { value: any; },password: any){
    this.user = {
      name:name.value,
      email:email.value,
      password:password.value,
      posts:[]
    };
    this.users.push(this.user)
     sessionStorage.setItem('dbusers',JSON.stringify(this.users))
    console.log(this.users)
    }
  
  

  ngOnInit(): void {
  }

}
