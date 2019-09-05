import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginUserData = {}
  path:string
 constructor(private _auth: AuthService , private router:Router){

}
  ngOnInit(){

  }
  isAuthenticated(){
  
    return this._auth.isAuthenticated();
}

 loginUser(){
   this._auth.loginUser(this.loginUserData ).subscribe(
     res => { //console.log(res.body.token);
  this._auth.saveToken(res.body.token);
  if(this.isAuthenticated()=='ROLE_User'){
    this.router.navigate(['/envoi_argent'])
    }
    if(this.isAuthenticated()=='ROLE_AdminWari'){
      this.router.navigate(["/ajout_partenaire"])

      }
      if(this.isAuthenticated()=='ROLE_Caissier'){
        this.router.navigate(["/depot_caissier"])

        }
        if(this.isAuthenticated()=='ROLE_Partenaire'){
          this.router.navigate(["/liste_utilisateur"])

          } }
    
    
     ,err =>{console.log(err)}
   )
 }
 
}
