import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.css']
})
export class DepotComponent implements OnInit {
  public toke;

  loginUserData = {}
  constructor(private _auth: AuthService){}

  ngOnInit() {
  }
  remove(){
    this._auth.deletetoken();
    console.log( this._auth.tokendougna());
    this.toke=this._auth.tokendougna();
     this._auth.setRoles('aukine');
     console.log( this._auth.roles);
  }
  loginUser(){
    this._auth.depotcaissier(this.loginUserData ).subscribe(
      res => { //console.log(res.body.token);
   this._auth.saveToken(res.body.token);
   Swal.fire(
    'Ok',
    'Depot éffectué avec succés',
    'success'
  )
     }
      ,err =>{console.log(err)
        Swal.fire(
          'Erreur lors du depot',
          'Veillez verifier le code saisie ou la somme entrée (>75000)',
          'error'
        )
      }
    )
  }
}
