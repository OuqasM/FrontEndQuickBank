import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/account.service';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private tokenService:TokenService ,
    private accountService : AccountService,
    private router:Router
    ){ }
AuthentificatedUser = this.tokenService.getInfos();


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if(this.accountService.authStatus)
      { if(this.AuthentificatedUser?.role[0] == "CLIENT"){
          return true;
        }else {
          this.router.navigateByUrl("/")
          return false;
        }    
      }
      else {
        console.log();
        this.tokenService.remove()
        this.accountService.changeStatus(false)
        this.router.navigateByUrl("/login")
        return false;
      }      
    }
}
   

