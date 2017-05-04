import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent }   from './app.component';
import {  AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_guards/auth.guard';

@NgModule({
    imports:      [
        BrowserModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [ AppComponent],
     providers: [
         AuthenticationService,
         AuthGuard
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }

