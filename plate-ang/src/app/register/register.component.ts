import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/services/authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthenticationService,    private router: Router,
    ) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.form.grade = 'etudiant';
    console.log(this.form);
    
    this.authService.register(this.form).subscribe(
      (data) => {
        console.log(data);
        this.router.navigate(['/login']);
      },
      (err) => {
        console.log(err);
      }
    );
    

    console.log(this.form);
  }

}
