import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursService } from '../shared/services/cours.service';

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css']
})
export class CoursComponent implements OnInit {

  
  user: any;
  id: any;
  sub: any;
  cours: any;

  constructor(private coursService:CoursService, private router:Router, private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.actroute.params.subscribe( parms=>{
      this.id = +parms['id'];
    });
    console.log(this.id);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getCours(this.user.token);
    }, 1000);
  }


  getCours(token): void {
    this.coursService.getCours(token)
        .subscribe(specialite => {
          this.cours = specialite["records"];
          console.log(this.cours);
          this.cours = this.cours.filter(s=>{
            return s.matiere_id == this.id;
          })
          console.log('cours liste',this.cours);
        });
  }

}
