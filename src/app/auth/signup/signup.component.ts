import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loginUserData = {imageFile : File = null};
  public toke;

  constructor(private _auth: AuthService){}
   ngOnInit(){
 
   }
  
   handleFileInput(file: FileList) {
    this.loginUserData.imageFile = file.item(0);
    const reader = new FileReader();
  
    reader.readAsDataURL(this.loginUserData.imageFile);
    
    }
    remove(){
      this._auth.deletetoken();
      console.log( this._auth.tokendougna());
      this.toke=this._auth.tokendougna();
       this._auth.setRoles('aukine');
       console.log( this._auth.roles);
    }

  loginUser(){
    console.log(this.loginUserData)
    this._auth.loginUtilisateur(this.loginUserData ).subscribe(
      res => {console.log(JSON.stringify(res)); }
      ,err =>{console.log(JSON.stringify(err))}
    )
  }

}
