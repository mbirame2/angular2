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

  public toke;

   loginUserData = {coderetrait :null,codetransfert:null};
  constructor(private _auth: AuthService){}
   ngOnInit(){
 
   }
   nomcomplet(){
     return this.nomcompletreceveur;
   }
  loginUser(){
    this._auth.testretrait(this.loginUserData ).subscribe(
      res => {console.log(res);
           
            if(res.body.status!="retrait" && res.body.nomcompletReceveur){
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
              this.loginUserData.codetransfert=res.body.codeTransfert;
               this.finalisons();
            })
     }else if(res.body.status=="retrait" && res.body.nomcompletReceveur){
      Swal.fire(
        'Erreur lors de l enregistrement',
        'Veillez verifier le code entrée'+
        'NB : Un code de transfert ne peut pas etre utiliser deux fois',
        'error' 
      )}else{
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
  finalisons(){
    this._auth.finaliser(this.loginUserData).subscribe(
      res => {console.log(res);

     }
      ,err =>{console.log(err)}
    )
  }
}
