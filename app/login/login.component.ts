import { Component, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { AuthenticationService } from '../_services/authentication.service';
import { AdalService } from 'ng2-adal/core';
import { Observable } from 'rxjs/Rx';

@Component({
    //moduleId: module.id,
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    data: any;
    constructor(private http: Http, private router: Router, private route: ActivatedRoute, private authenticationService: AuthenticationService, private adalService: AdalService) {

        if (this.adalService.userInfo.isAuthenticated) {
            this.router.navigate(['/dashboard']);
        }
    }

    ngOnInit() {
        // reset login status
        //this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        // debugger;

        // this.http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe((data) => {
        //     debugger;
        //     this.data = data.json()
        // });


        var grant_type = "password";
        var clientid = '87637f1b-7d70-4382-ab3f-3db64e5dae24';
        var resource = 'https://rajeshpanditjmtoutlook.onmicrosoft.com/TodoListService';
        var client_secrete = 'I37lPRZkFXuXo1I6umDKXg4gZrRRiVlmyogBCCqfWV0=';
        var username = "sanyukta@rajeshpanditjmtoutlook.onmicrosoft.com";
        var password = "Rajesh@2392";

        // var headers = new Headers();
        // headers.append('Accept', 'application/json;');
        // headers.append('Content-Type', 'application/x-www-form-urlencoded;');
        // headers.append('Access-Control-Allow-Origin', '*');
        // headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
        // headers.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        // //headers.append('Authorization', 'Basic ' + btoa('username:password'));
        // let urlSearchParams = new URLSearchParams();
        // urlSearchParams.append('grant_type', grant_type);
        // urlSearchParams.append('client_id', clientid);
        // urlSearchParams.append('resource', resource);
        // urlSearchParams.append('client_secret', client_secrete);
        // urlSearchParams.append('username', username);
        // urlSearchParams.append('password', password);

        // let body = urlSearchParams.toString()
        // let options = new RequestOptions({ headers: headers });


        // this.http.post("https://login.windows.net/rajeshpanditjmtoutlook.onmicrosoft.com/oauth2/token", body, { headers: headers }).toPromise()
        //     .then(response => {
        //         let result = response.json();
        //         if (result.State == 1) {
        //             let json = result.Data as any;

        //             sessionStorage.setItem("token", json.accessToken);
        //         }
        //         return result;
        //     })
        //     .catch(this.handleError);



        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        //headers.append('Authorization', 'Basic U2FueXVrdGFOYWlrMjdAZ21haWwuY29tOnN1c2gmc2FueXUjMDc=');
        headers.append('Access-Control-Allow-Credentials','true');
        //headers.append('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        //headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
       headers.append("Access-Control-Allow-Headers", "x-requested-with, Content-Type, origin, authorization, accept, client-security-token");
        var body = "addCorsHeader=true&grant_type=password&client_id=87637f1b-7d70-4382-ab3f-3db64e5dae24&resource:https://rajeshpanditjmtoutlook.onmicrosoft.com/TodoListService&client_secret:I37lPRZkFXuXo1I6umDKXg4gZrRRiVlmyogBCCqfWV0=&username:sanyukta@rajeshpanditjmtoutlook.onmicrosoft.com&password:Rajesh@2392"
        //var body='grant_type=password&client_id=87637f1b-7d70-4382-ab3f-3db64e5dae24&resource=https%3A%2F%2Frajeshpanditjmtoutlook.onmicrosoft.com%2FTodoListService&client_secret=I37lPRZkFXuXo1I6umDKXg4gZrRRiVlmyogBCCqfWV0%3D&username=sanyukta%40rajeshpanditjmtoutlook.onmicrosoft.com&password=Rajesh%402392'
        
        this.http.post('https://login.windows.net/rajeshpanditjmtoutlook.onmicrosoft.com/oauth2/token', body, { headers: headers,withCredentials:true })
            .subscribe((res) => { res.json() },
            error => {
                console.log(JSON.stringify(error.json()));
            });











        this.loading = true;
        this.authenticationService.login("lax", "lax");
        this.router.navigate(['/dashboard']);
    }
    logout() {
        this.adalService.logOut();
        this.router.navigate(['/login']);
    }
    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}

