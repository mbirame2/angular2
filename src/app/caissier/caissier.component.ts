import { Component, OnInit } from '@angular/core';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-caissier',
  templateUrl: './caissier.component.html',
  styleUrls: ['./caissier.component.css']
})
export class CaissierComponent implements OnInit {
  public toke;
  loginUserData = {imageFile : File = null};

  constructor(private _auth: AuthService){}
   ngOnInit(){
 
   }
  
   handleFileInput(file: FileList) {
    this.loginUserData.imageFile = file.item(0);
    const reader = new FileReader();
  
    reader.readAsDataURL(this.loginUserData.imageFile);
    
    }


  loginUser(){
    console.log(this.loginUserData)
    this._auth.signcaissier(this.loginUserData ).subscribe(
      res => {console.log(JSON.stringify(res)); }
      ,err =>{console.log(JSON.stringify(err))}
    )
  }
  remove(){
    this._auth.deletetoken();
    console.log( this._auth.tokendougna());
    this.toke=this._auth.tokendougna();
     this._auth.setRoles('aukine');
     console.log( this._auth.roles);
  }


}
