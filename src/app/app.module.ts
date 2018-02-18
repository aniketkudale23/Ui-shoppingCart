import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpModule } from '@angular/http'
import { HttpClientModule } from '@angular/common/http'
import {DataTableModule} from "angular2-datatable";
import {GrowlModule} from 'primeng/growl';










import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    RegisterComponent,
    
    
  ],
  imports: [
    BrowserModule, routing, ReactiveFormsModule, BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(), HttpModule, HttpClientModule,
    DataTableModule,
    GrowlModule,
   
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
