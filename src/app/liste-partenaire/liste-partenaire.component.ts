import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Partenaire } from './../Partenaire';

@Component({
  selector: 'app-liste-partenaire',
  templateUrl: './liste-partenaire.component.html',
  styleUrls: ['./liste-partenaire.component.css']
})
export class ListePartenaireComponent implements OnInit {

  constructor(private _auth: AuthService ){}  
  user:Partenaire[];

  ngOnInit() {
    this._auth.listePartenaire()
    .subscribe(
      res=>
      {this.user = res.body} ,
      error => console.log(error.body)
      )
  }
  bloquage(id){
    this._auth.blokpart(id).subscribe(
      res=>
     { console.log(res+id) 
      this.ngOnInit()},
      error => console.log(error)
      );
  }

}
