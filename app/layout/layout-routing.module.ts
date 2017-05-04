import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from '../login/login.component';
import { AuthGuard } from '../_guards/auth.guard';
const routes: Routes = [
    {
        path: '', component: LayoutComponent,canActivate:[AuthGuard],
        children: [
            { path: 'dashboard', loadChildren: '../dashboard/dashboard.module#DashboardModule' },
            {  path: 'user', loadChildren: '../dashboard/user/user.module#UserModule'},
            { path: 'tables', loadChildren: '../dashboard/table/table.module#TableModule' },
            { path: 'typography', loadChildren: '../dashboard/typography/typography.module#TypographyModule' },
            { path: 'icons', loadChildren: '../dashboard/icons/icons.module#IconsModule' },
            { path: 'maps', loadChildren: '../dashboard/maps/maps.module#MapsModule' },
            { path: 'notifications', loadChildren: '../dashboard/notifications/notifications.module#NotificationsModule' }
        ]
    },
    {
                path:'Logout',component:LoginComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }