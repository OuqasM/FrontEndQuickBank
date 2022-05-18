import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/administrateur/dashboard/dashboard.component';
import { ClientdashboardComponent } from './components/client/clientdashboard/clientdashboard.component';




const routes: Routes = [
  {path : "administrateur", component : DashboardComponent },
  {path : "client", component : ClientdashboardComponent },
  {path : "login", component : LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }