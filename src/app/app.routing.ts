import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';




import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component'
import {HomepageComponent} from './homepage/homepage.component'
import {RegisterComponent} from './register/register.component'



//import { GetStudentComponent } from './get-student/get-student.component';


const appRoutes: Routes  = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
   path: 'getHomePage',
   component: HomepageComponent 
  },
  {
  path: 'registerationPage', 
  component: RegisterComponent
  }
];



export const routing:   ModuleWithProviders = RouterModule.forRoot(appRoutes); 

