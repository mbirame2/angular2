import { AcceuilComponent } from './acceuil/acceuil.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './auth/signin/signin.component' ;
import {APP_BASE_HREF} from '@angular/common';
import {  Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AjoutPartenaireComponent } from './Partenaire/ajout-partenaire/ajout-partenaire.component';
import { EnvoiArgentComponent } from './Transaction/envoi-argent/envoi-argent.component';
import { RetraitargentComponent } from './Transaction/retraitargent/retraitargent.component';
import { ListeUtilisateurComponent } from './Partenaire/liste-utilisateur/liste-utilisateur.component';
import { DepotComponent } from './depot/depot.component';
import { CaissierComponent } from './caissier/caissier.component';
import { ListePartenaireComponent } from './liste-partenaire/liste-partenaire.component';
 
const appRoutes: Routes=[
  { path: 'signup' , component: SignupComponent},
  { path: 'auth' , component : SigninComponent},
  { path: 'acceuil', component:AcceuilComponent} ,
  { path: 'ajout_partenaire', component:AjoutPartenaireComponent} ,
  { path: 'liste_utilisateur', component:ListeUtilisateurComponent} ,
  { path: 'envoi_argent', component:EnvoiArgentComponent} ,
  { path: 'retrait_argent', component:RetraitargentComponent} ,
  { path: '', component:AcceuilComponent} ,
  {path: 'depot_caissier', component:DepotComponent} ,
  {path: 'signcaissier', component:CaissierComponent} ,
  { path:'liste_partenaire', component:ListePartenaireComponent}

] ;
@NgModule({
  declarations: [ 
    AppComponent ,
    SigninComponent ,
    SignupComponent , 
  AcceuilComponent, AjoutPartenaireComponent, EnvoiArgentComponent, RetraitargentComponent, ListeUtilisateurComponent,DepotComponent, CaissierComponent, ListePartenaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes) ,
  ],
  providers: [   
     AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
