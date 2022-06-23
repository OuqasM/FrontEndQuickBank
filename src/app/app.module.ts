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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import  { MatToolbarModule } from '@angular/material/toolbar';
import  { MatSidenavModule } from '@angular/material/sidenav';
import  { MatButtonModule } from '@angular/material/button';
import  { MatIconModule } from '@angular/material/icon';
import  { MatDividerModule } from '@angular/material/divider';
import { MescomptesComponent } from './components/client/mescomptes/mescomptes.component';
import { AcceuilComponent } from './components/acceuil/acceuil.component';
import { MatTableModule } from '@angular/material/table';
import { JwtInterceptor } from './jwt.interceptor';
import { ModifierclientComponent } from './components/administrateur/clients/modifierclient/modifierclient.component';
import { AjouterclientComponent } from './components/administrateur/clients/ajouterclient/ajouterclient.component';
import { FormSignUpComponent } from './components/form-sign-up/form-sign-up.component';
import { BankingComponent } from './components/banking/banking.component';
import { RaclamationComponent } from './components/banking/raclamation/raclamation.component';
import { ExchangeComponent } from './components/banking/exchange/exchange.component';
import { ChartComponent } from './components/banking/chart/chart.component';
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
    ModifierclientComponent,
    AjouterclientComponent,
    FormSignUpComponent,
    BankingComponent,
    RaclamationComponent,
    ExchangeComponent,
    ChartComponent,
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
    MatDividerModule,
    MatTableModule
  
  ],
  providers: [
    {
      provide : HTTP_INTERCEPTORS,
      useClass : JwtInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
