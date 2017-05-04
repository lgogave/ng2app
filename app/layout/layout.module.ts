import { NgModule }      from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarModule } from '../sidebar/sidebar.module';
import { FooterModule } from '../shared/footer/footer.module';
import { NavbarModule} from '../shared/navbar/navbar.module';
import { LoginModule } from '../login/login.module';
import { AuthGuard } from '../_guards/auth.guard';

@NgModule({
    imports: [
        CommonModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        LayoutRoutingModule,
        LoginModule      
    ],
    declarations: [
        LayoutComponent
    ],
    providers:[AuthGuard]
})
export class LayoutModule { }