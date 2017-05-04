import {Injectable} from '@angular/core';

@Injectable()
export class SecretService {
  public get adalConfig(): any {
    return {
      tenant: 'rajeshpanditjmtoutlook.onmicrosoft.com',
      clientId: '5b867b8e-f145-4c49-88a7-0c8ef46ce4e0',
      redirectUri: window.location.origin + '/',
      postLogoutRedirectUri: window.location.origin + '/'
    };
  }
}
