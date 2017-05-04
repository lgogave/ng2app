import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user.routes';
import { UserComponent } from './user.component';


@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule
    ],
    declarations: [
        UserComponent
    ]
})
export class UserModule { }
