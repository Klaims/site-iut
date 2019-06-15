import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../app/services/auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  signInForm: FormGroup;
  errorMessage: string;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {

    this.initForm();
  }

  initForm() {
    
    this.signInForm = this.formBuilder.group( { 
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.pattern(/[0-9a-zA-Z]{6,}/)]]
    });
  }

  onSubmit() {

    const email = this.signInForm.get('email').value;
    const mdp = this.signInForm.get('mdp').value;

    this.authService.signInUser(email,mdp).then(

      () => {

        this.router.navigate(['/accueil']);
      },
      (error) => {

        this.errorMessage = error;
      }
    );
  }
}
