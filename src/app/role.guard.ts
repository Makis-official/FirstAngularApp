import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
  UrlTree,
} from '@angular/router';
import { Observable } from "rxjs";
import { PostsService } from "./posts.service";


@Injectable()
export class roleGuard implements CanActivate {

  constructor(private router:Router, private serv: PostsService ) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot):
      Promise<boolean | UrlTree>
      | boolean
      | UrlTree
      | Observable<boolean
      | UrlTree> {

    if (this.serv.role === 'admin')  {
      return true;
    } else {
      return this.router.navigateByUrl('error');
    }
  }
}
