import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Matiere } from '../shared/classes/matiere';
import { MatieresService } from '../shared/services/matiere.service';

@Component({
  selector: 'app-matiere',
  templateUrl: './matiere.component.html',
  styleUrls: ['./matiere.component.css']
})
export class MatiereComponent implements OnInit {

  
  matieres:Matiere[];
matiere:Matiere;
  user: any;
  id: any;
  sub: any;
  matiere_matiere: any;
  matiere_id: any;

  constructor(private matiereService:MatieresService, private router:Router, private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.actroute.params.subscribe( parms=>{
      this.id = +parms['id'];
    });
    console.log(this.id);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getMatieres(this.user.token);
    }, 1000);
  }


  getMatieres(token): void {
    this.matiereService.getMatieres(token)
        .subscribe(specialite => {
          this.matieres = specialite["records"];
          console.log(this.matieres);
          this.matieres = this.matieres.filter(s=>{
            return s.classe_id == this.id;
          })
        
          console.log('matieres liste',this.matieres);
        });
  }


 

}
