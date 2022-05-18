import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { NavbarComponent } from './components/commun/navbar/navbar.component';
import { FooterComponent } from './components/commun/footer/footer.component';
import { AdminsidebareComponent } from './components/administrateur/adminsidebare/adminsidebare.component';
import { DashboardComponent } from './components/administrateur/dashboard/dashboard.component';
import { ClientsComponent } from './components/administrateur/clients/clients.component';
import { ComptesComponent } from './components/administrateur/comptes/comptes.component';
import { PostesComponent } from './components/administrateur/postes/postes.component';
import { ClientsidebareComponent } from './components/client/clientsidebare/clientsidebare.component';
import { AppRoutingModule } from './app-routing.module';
import { ClientdashboardComponent } from './components/client/clientdashboard/clientdashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { UtilisateursComponent } from './components/administrateur/utilisateurs/utilisateurs.component';
import { MespostesComponent } from './components/client/mespostes/mespostes.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    AdminsidebareComponent,
    DashboardComponent,
    ClientsComponent,
    ComptesComponent,
    PostesComponent,
    ClientsidebareComponent,
    ClientdashboardComponent,
    UtilisateursComponent,
    MespostesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
