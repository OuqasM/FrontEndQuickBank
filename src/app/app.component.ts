import { BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AccountService } from './services/account.service';
import { TokenService } from './services/token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit {

  @ViewChild(MatSidenav) 
  sidenav !: MatSidenav;
  AuthentificatedUser = null;
  constructor(
    private tokenservice : TokenService,
    private accountservie : AccountService,
    private router : Router,
    private observer:BreakpointObserver
  ) { }
 
  ngOnInit(): void {
    this.accountservie.authStatus.subscribe(() => {
      this.AuthentificatedUser = this.tokenservice.getInfos();
      console.log(this.AuthentificatedUser)
    })
  }

  ngAfterViewInit(){
    //  this.observer.observe(['(max-width : 800px)']).subscribe((res) => {
    //     if(res.matches){
    //       this.sidenav.mode ='over';
    //       this.sidenav.close();
    //     }else {
    //       this.sidenav.mode ='side';
    //       this.sidenav.open();
    //     }
    //  })
  }

  logout() {
    this.tokenservice.remove();
    this.accountservie.changeStatus(false);
    this.router.navigateByUrl('/login')
  }
}
