import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-retraitargent',
  templateUrl: './retraitargent.component.html',
  styleUrls: ['./retraitargent.component.css']
})
export class RetraitargentComponent implements OnInit {

  public nomcompletreceveur;
  private INE;
  public code;
  public toke;

   loginUserData = {coderetrait :null};
  constructor(private _auth: AuthService){}
   ngOnInit(){
 
   }
   nomcomplet(){
     return this.nomcompletreceveur;
   }
  loginUser(){
    this._auth.testretrait(this.loginUserData ).subscribe(
      res => {console.log(res);
            this.nomcompletreceveur=res.body.nomcompletReceveur;
            this.INE=res.body.pieceidReceveur; 
            this.loginUserData.coderetrait=res.body.codeTransfert;
            console.log(this.loginUserData)
            this.finalisons( this.loginUserData)
            if(res.body.nomcompletReceveur){
            Swal.fire({
         
              type: 'info',
              title: '<h2> Infos Transaction </h2><hr/>',
              html: 
                    '<h5>          Expediteur           </h5>'
                    +'<p> Nom : '+res.body.nomcomplet+'<br>'
                    +'Adresse: '+res.body.adresse+'<br>'
                    +'Téléphone: '+res.body.telephone+'<br>'
                    +'Numéro d\'identification : '+res.body.pieceid+'<br> </p>'
                    +'<h5>        Bénéficiaire          </h5>'
                    +'<p> Nom : '+res.body.nomcompletReceveur+'<br>'
                    +'Code d\'envoi : '+res.body.codeTransfert+'<br>'
                    +'Montant envoyé : '+res.body.montantaverser+'<br>'
                    +'Date envoi : '+res.body.datedelivrance+'</p>',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Confirmer le retrait'
            }).then((result) => {
              if (result.value) {
                Swal.fire(
                'Succés',
                'Transaction éffectué avec succés',
                'success'
               )}
               Swal.mixin({
                 position: 'top-end',
                 showConfirmButton: false,
                 type: 'success',
                 title: 'Retrait éffectué avec succés'
               })
               this.finalisons(res.body.codeTransfert);
              
            })
     }else{
      Swal.fire(
        'Echec ! ',
        'Le code saisi est incorecte. Vérifier à nouveau.',
        'error'
       )
     }}
      ,err =>{console.log(err) ;
      
      }
    )
  }
  remove(){
    this._auth.deletetoken();
    console.log( this._auth.tokendougna());
    this.toke=this._auth.tokendougna();
     this._auth.setRoles('aukine');
     console.log( this._auth.roles);
  }
  finalisons(code){
    this._auth.finaliser(code).subscribe(
      res => {console.log(res);

     }
      ,err =>{console.log(err)}
    )
  }
}
