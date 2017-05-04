import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http'
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginRoutingModule } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoutingModule,
    HttpModule
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
