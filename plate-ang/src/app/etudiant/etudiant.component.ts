import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Etudiant } from '../shared/classes/etudiant';
import { EtudiantsService } from '../shared/services/etudiant.service';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent implements OnInit {

  
  etudiants:Etudiant[];
etudiant:Etudiant;
  user: any;

  constructor(private etudiantsService:EtudiantsService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getEtudiants(this.user.token);
      console.log(this.getEtudiants["records"]);
    }, 1000);
  }


  getEtudiants(token): void {
    this.etudiantsService.getEtudiants(token)
        .subscribe(specialite => {
          this.etudiants = specialite["records"];
          this.etudiants = this.etudiants.filter(s=>{
            return s.grade == 'etudiant';
          })
          console.log('etudiants liste',this.etudiants);
        });
  }

}
