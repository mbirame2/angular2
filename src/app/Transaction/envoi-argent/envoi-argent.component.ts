import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-envoi-argent',
  templateUrl: './envoi-argent.component.html',
  styleUrls: ['./envoi-argent.component.css']
})
export class EnvoiArgentComponent implements OnInit {
  public toke;

  
  loginUserData = {}
 constructor(private _auth: AuthService){}
  ngOnInit(){

  }
  remove(){
    this._auth.deletetoken();
    console.log( this._auth.tokendougna());
    this.toke=this._auth.tokendougna();
     this._auth.setRoles('aukine');
     console.log( this._auth.roles);
  }
 loginUser(){
   this._auth.envoiArgent(this.loginUserData ).subscribe(
     res => {console.log(res);
           
    }
     ,err =>{console.log(err)}
   )
 }
}
