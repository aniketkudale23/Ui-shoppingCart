import { Component, OnInit } from '@angular/core';

import { Validators, FormControl, FormGroup} from "@angular/forms";
import {PostrequestService} from '../postrequest.service'
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [PostrequestService]
})
export class RegisterComponent implements OnInit {

  constructor(private postrequest: PostrequestService, private router: Router) { }

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  SignupForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password : new FormControl('',[Validators.required,Validators.minLength(10)]),
    role : new FormControl()

        });



  ngOnInit() {
  }

  validate()
  {
    
    var emailval = this.SignupForm.get('email').value
    var register =  {
      registerId: 1,
      email: this.SignupForm.get('email').value,
      password: this.SignupForm.get('password').value,
      role:  this.SignupForm.get('role').value
    }

    //console.log(this.SignupForm.value, "inside validate");
    console.log(register);
    this.postrequest.register(register)
    .subscribe(data =>   (console.log(data),this.router.navigate(['login'])),
     error => console.log("error"));
  }
}
