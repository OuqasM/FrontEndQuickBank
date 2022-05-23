import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/account.service';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm !: FormGroup;
  AuthentificatedUser = null;
  errorMessage : boolean= false;
  constructor(
    private authservice : AuthService,
    private tokenservice: TokenService,
    private router:Router,    
    private fb : FormBuilder,
    private accountService:AccountService
  ) { }

  
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username : ["",[Validators.required]],
      password : ["", [Validators.required]]
    });

  }


  login(){

    this.authservice.login(this.loginForm.value).subscribe(data => {
      // console.log(data)
      this.handleResponse(data);
    }, err => {
      this.errorMessage = true; 
      console.log(err)
    })
  }

handleResponse(data){
  this.tokenservice.handle(data);
  this.accountService.changeStatus(true);
  this.AuthentificatedUser = this.tokenservice.getInfos();
 
  if(this.AuthentificatedUser.role[0] == "ADMIN"){
    this.router.navigateByUrl("/administrateur");
    console.log("adminnnnn")

  }
  else if(this.AuthentificatedUser.role[0] == "CLIENT"){
    this.router.navigateByUrl("/client");

    console.log("cliennnnnnt")
  }else {
    console.log("lodouuuuuut")
    // this.tokenservice.remove();
    // this.accountService.changeStatus(false);
    // this.router.navigateByUrl('/login')
  }
}

}
