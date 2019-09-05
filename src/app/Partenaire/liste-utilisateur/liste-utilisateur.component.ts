import { user } from './../../user';
import { Component, OnInit , ElementRef, HostListener, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { AuthService } from './../../services/auth.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-liste-utilisateur',
  templateUrl: './liste-utilisateur.component.html',
  styleUrls: ['./liste-utilisateur.component.css']
})
export class ListeUtilisateurComponent implements OnInit {
  public toke;

  private  ide;

  constructor(private _auth: AuthService ){}  
  user:user[];

  ngOnInit() {
    this._auth.listeUtilisateur()
    .subscribe(
      res=>
      {this.user = res.body} ,
      error => console.log(error.body)
      )
  }
  
  bloquage(id){
    this._auth.blok(id).subscribe(
      res=>
      console.log(res+id) ,
      error => console.log(error)
      );
  }
  isAuthenticated(){
  
    return this._auth.isAuthenticated();

}
tok(){
 return this._auth.tokendougna();
}
remove(){
  this._auth.deletetoken();
  console.log( this._auth.tokendougna());
  this.toke=this._auth.tokendougna();
   this._auth.setRoles('aukine');
   console.log( this._auth.roles);
}
 }


