import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Departement } from '../shared/classes/departement';
import { Section } from '../shared/classes/section';
import { DepartementsService } from '../shared/services/departement.service';
import { EtudiantsService } from '../shared/services/etudiant.service';
import { SectionsService } from '../shared/services/section.service';
import { AuthenticationService } from '../shared/services/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  departements:Departement[];
departement:Departement;
  user: any;
  section: Section[];
  sections: Section[];
  etudiantService: any;
  etudiants: any;
  currentUserSubject: any;
  constructor(private departementService:DepartementsService,
     private sectionService:SectionsService,private EtudiantService:EtudiantsService,
     private router:Router,
     private authservice: AuthenticationService,
     ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getDepartements(this.user.token);
      console.log(this.getDepartements);
    }, 1000);

    setTimeout(() => {
      this.getSections(this.user.token);
      console.log(this.getSections);
    }, 1000);

    setTimeout(() => {
      this.getEtudiants(this.user.token);
      console.log(this.getEtudiants);
    }, 1000);
  }


  getDepartements(token): void {
    this.departementService.getDepartments(token)
        .subscribe(specialite => {
          this.departements = specialite["records"];
          console.log('departements liste',this.departements);
        });
  }


  getSections(token): void {
    this.sectionService.getSections(token)
        .subscribe(specialite => {
          this.sections = specialite["records"];
          console.log('sections liste',this.sections);
        });
  }

  
  getEtudiants(token): void {
    this.etudiantService.getEtudiants(token)
        .subscribe(specialite => {
          this.etudiants = specialite["records"];
          console.log('Etudiant liste',this.etudiants);
        });
  }

  loggedin(){
    return localStorage.getItem('token');
  }
  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
    }
}
