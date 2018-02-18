import { Component, OnInit } from '@angular/core';
//import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Validators, FormControl, FormGroup} from "@angular/forms";
import { VERSION } from '@angular/core';
import { Router } from '@angular/router'; 
import {Message} from 'primeng/api';





import {PostrequestService} from '../postrequest.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PostrequestService]
})
export class LoginComponent implements OnInit {

 private msgs: Message[] = [];
 

  constructor(private postrequest: PostrequestService, private router: Router) { }

  ngOnInit() {
  }

   email_status: String;
   result: any;

     emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    
    loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.pattern(this.emailPattern)]),
    password : new FormControl('',[Validators.required,Validators.minLength(10)]),
    remember : new FormControl()

        });


    //name = new FormControl('', [Validators.required, Validators.maxLength(15)]);
    

   register()
   { 
     this.router.navigate(['registerationPage'])
   }

    validate()
    {
      this.msgs = [];
      console.log(this.loginForm.value, "inside validate");
      this.postrequest.registerCustomer(this.loginForm.get('email').value,  this.loginForm.get('password').value )
      .subscribe(data => ( data ? this.router.navigate(['getHomePage']) : this.msgs.push({severity:'error', summary:'Validation Failed', detail:'Email id or password not valid'})
      ),
       error => console.log("error") );
      console.log(this.msgs)
      console.log(this.loginForm.get('email').value);
      this.email_status =  this.loginForm.get('email').status;
       
    }

  }


  
  //  student_info :  {
  //   studentid: number, 
  //   name: String,
  //   address: String,
  //   stream: String
  // }
    
 





