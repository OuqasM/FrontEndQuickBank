import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FooterComponent } from './components/commun/footer/footer.component';
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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import  { MatToolbarModule } from '@angular/material/toolbar';
import  { MatSidenavModule } from '@angular/material/sidenav';
import  { MatButtonModule } from '@angular/material/button';
import  { MatIconModule } from '@angular/material/icon';
import  { MatDividerModule } from '@angular/material/divider';
import { MescomptesComponent } from './components/client/mescomptes/mescomptes.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    DashboardComponent,
    ClientsComponent,
    ComptesComponent,
    PostesComponent,
    ClientsidebareComponent,
    ClientdashboardComponent,
    UtilisateursComponent,
    MespostesComponent,
    MescomptesComponent,
    AcceuilComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
