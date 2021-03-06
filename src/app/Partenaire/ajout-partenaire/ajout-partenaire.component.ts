import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ajout-partenaire',
  templateUrl: './ajout-partenaire.component.html',
  styleUrls: ['./ajout-partenaire.component.css']
})
export class AjoutPartenaireComponent implements OnInit {
  loginUserData = {imageFile : File = null};
  public toke;

  constructor(private _auth: AuthService) { }
  remove(){
    this._auth.deletetoken();
    console.log( this._auth.tokendougna());
    this.toke=this._auth.tokendougna();
     this._auth.setRoles('aukine');
     console.log( this._auth.roles);
  }
  ngOnInit() {
  }

  handleFileInput(file: FileList) {
    this.loginUserData.imageFile = file.item(0);
    const reader = new FileReader();
   
    reader.readAsDataURL(this.loginUserData.imageFile);
    
    }


  loginUser(){
    console.log(this.loginUserData)
    this._auth.loginPartenaire(this.loginUserData ).subscribe(
      res => {console.log(res)}
      ,err =>{console.log(err)
        if(err.status==200){
          Swal.fire(
            'Succés ! ',
            'Partenaire ajouté avec succés. '+
            'Voir le contrat : <a routerLink="pdf">ici</a>',
            'success'
           )
       
        } else{
        Swal.fire(
          
          'Erreur lors de l enregistrement',
          'Veillez verifier la saisie de vos champs',
          'error'
        )
      }}
    )
  }

}
