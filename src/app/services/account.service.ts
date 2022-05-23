import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private loggedIn = new BehaviorSubject<boolean>(this.tokenservice.loggedIn());

  authStatus = this.loggedIn.asObservable();
  constructor(private tokenservice:TokenService) { }

  changeStatus(value : boolean){
    this.loggedIn.next(value);
  }
}
