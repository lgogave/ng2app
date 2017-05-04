import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecretService } from "./services/secret.service";
import { AdalService } from "ng2-adal/services/adal.service";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    constructor(
        private adalService: AdalService,
        private secretService: SecretService,
        private router: Router
    ) {
        this.adalService.init(this.secretService.adalConfig);
    }
    ngOnInit() {
        this.adalService.handleWindowCallback();
        this.adalService.getUser();
        this.router.navigate(['login']);
    }
}
