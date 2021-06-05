import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PublicationService } from 'src/app/services/publication.service';
import { Publication } from 'src/app/shared/classes/publication';

@Component({
  selector: 'app-create-publication',
  templateUrl: './create-publication.component.html',
  styleUrls: ['./create-publication.component.css']
})
export class CreatePublicationComponent implements OnInit {

  submitted = false;
  user: any;
  publicationForm: FormGroup;
  date: Date;
  userinfo: any;

  constructor(private publicationService: PublicationService,
    private router: Router, private fb : FormBuilder) { }

  ngOnInit() {
    this.date = new Date();
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    this.userinfo = JSON.parse(localStorage.getItem('user'));
    console.log(this.userinfo); 
    this.publicationForm = this.fb.group({
      texte:[''],
      date: this.date,
      //idpuser_id: this.userinfo.id
    })
  }

  newPublication(): void {
    this.submitted = false;
  }

  save() {
    //this.publication.idpuser_id = this.user;
    console.log(this.publicationForm.value);
    this.publicationService.createPublication(this.publicationForm.value,this.user.token)
      .subscribe(data => console.log(this.user), error => console.log(this.user.token));
    //this.gotoList();     
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/publications']);
  }

}
