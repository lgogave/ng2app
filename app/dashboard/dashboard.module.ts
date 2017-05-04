import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard.routes';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule
        
    ],
    declarations: [
        DashboardComponent,HomeComponent
    ]
})
export class DashboardModule { }
