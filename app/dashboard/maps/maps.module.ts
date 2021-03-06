import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapsRoutingModule } from './maps.routes';
import { MapsComponent } from './maps.component';


@NgModule({
    imports: [
        CommonModule,
        MapsRoutingModule
    ],
    declarations: [
        MapsComponent
    ]
})
export class MapsModule { }
