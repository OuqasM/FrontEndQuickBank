import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/administrateur/dashboard/dashboard.component';
import { ClientdashboardComponent } from './components/client/clientdashboard/clientdashboard.component';
import { ClientsComponent } from './components/administrateur/clients/clients.component';
import { UtilisateursComponent } from './components/administrateur/utilisateurs/utilisateurs.component';
import { PostesComponent } from './components/administrateur/postes/postes.component';
import { AdminGuard } from './guards/admin.guard';
import { ComptesComponent } from './components/administrateur/comptes/comptes.component';
import { MescomptesComponent } from './components/client/mescomptes/mescomptes.component';
import { MespostesComponent } from './components/client/mespostes/mespostes.component';
import { ClientGuard } from './guards/client.guard';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { ModifierclientComponent } from './components/administrateur/clients/modifierclient/modifierclient.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { BankingComponent } from './components/banking/banking.component';
import { ExchangeComponent } from './components/banking/exchange/exchange.component';
import { RaclamationComponent } from './components/banking/raclamation/raclamation.component';
import { ChartComponent } from './components/banking/chart/chart.component';




const routes: Routes = [
  {path : "", component : AcceuilComponent },
  { path : "administrateur", children : [
    { path : "" , component : DashboardComponent },
    { path : "clients" , children : [
      { path : "" , component : ClientsComponent },
      { path : "modifierclient/:id" , component : ModifierclientComponent }
    ] },
    // { path : "users" , component : UtilisateursComponent },
    { path : "posts" , component : PostesComponent },
    { path : "comptes" , component : ComptesComponent }
  ], canActivate : [AdminGuard]},
  { path : "client", children : [
    { path : "" , component : ClientdashboardComponent },
    { path : "mescomptes" , component : MescomptesComponent },
    { path : "mespostes" , component : MespostesComponent },
  ], canActivate : [ClientGuard]},  
  {path : "login", component : LoginComponent },
  {path : "signup", component : FormSignUpComponent },
  {path:'exchange',component:BankingComponent
    ,children:[
      {path:'treading',component:ExchangeComponent},
      {path:'send',component:RaclamationComponent},
      {path:'chart',component:ChartComponent}

    ]
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }