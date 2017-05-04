import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypographyRoutingModule } from './typography.routes';
import { TypographyComponent } from './typography.component';


@NgModule({
    imports: [
        CommonModule,
        TypographyRoutingModule
    ],
    declarations: [
        TypographyComponent
    ]
})
export class TypographyModule { }
