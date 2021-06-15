import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Quizz } from '../shared/classes/quizz';
import { QuizzsService } from '../shared/services/quizz.service';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {

  
  quizzs:Quizz[];
quizz:Quizz;
  user: any;
  id: any;
  sub: any;

  constructor(private quizzService:QuizzsService, private router:Router, private actroute:ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.actroute.params.subscribe( parms=>{
      this.id = +parms['id'];
    });
    console.log(this.id);
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    setTimeout(() => {
      this.getQuizzs(this.user.token);
    }, 1000);
  }


  getQuizzs(token): void {
    this.quizzService.getQuizzs(token)
        .subscribe(specialite => {
          this.quizzs = specialite["records"];
          console.log(this.quizzs);
          let filteredQuizz= this.quizzs.filter(s=>s.id ==this.id);
          this.quizzs = [...filteredQuizz];
          console.log('quizzs liste',this.quizzs);
        });
  }

}
