import { Component, OnInit } from '@angular/core';

import { Enseignant } from '../shared/classes/enseignant';
import { EnseignantsService } from '../shared/services/enseignant.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

   
  enseignants:Enseignant[];
enseignant:Enseignant;
  user: any;

  constructor(private enseignantsService:EnseignantsService, private router:Router) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getEnseignants(this.user.token);
      console.log(this.getEnseignants["records"]);
    }, 1000);
  }


  getEnseignants(token): void {
    this.enseignantsService.getEnseignants(token)
        .subscribe(specialite => {
          this.enseignants = specialite["records"];
          this.enseignants = this.enseignants.filter(s=>{
            return s.grade == 'enseignant';
          })
          console.log('enseignants liste',this.enseignants);
        });
  }
}
