import {NgModule} from '@angular/core'
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards/auth.guard';
import {AdalService} from 'ng2-adal/core';
import {SecretService} from './services/secret.service';
const routes: Routes = [
    { path: '', loadChildren: './layout/layout.module#LayoutModule',canActivate:[AuthGuard] },
    { path: 'login', loadChildren: './login/login.module#LoginModule' },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes,{initialNavigation:false, useHash: true})],
    exports: [RouterModule],
    providers: [AdalService, SecretService]
})
export class AppRoutingModule { }