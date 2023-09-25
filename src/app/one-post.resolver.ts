import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { AllServerService } from './service/all-server.service';

@Injectable({
  providedIn: 'root'
})

export class onePost implements Resolve<object> {
  constructor(private allServerService: AllServerService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> 
  {
    console.log('Resolve');
    return this.allServerService.getPostWithResolve();
  }
}

