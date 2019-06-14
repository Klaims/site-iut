import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Projet } from '../models/projet.model';
import { ProjetService } from '../services/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.css']
})
export class AjoutComponent implements OnInit {

  projetForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private projetsService: ProjetService,
              private router: Router) { }
              
  ngOnInit() {
    this.initForm();
  }
  
  initForm() {
    this.projetForm = this.formBuilder.group({
      title: ['', Validators.required],
      resume: ['', Validators.required]
    });
  }
  
  onSaveProjet() {
    const title = this.projetForm.get('title').value;
    const resume = this.projetForm.get('resume').value;

    let newProjet = new Projet(title, resume);
    newProjet.titre = title;
    newProjet.resume = resume;

    this.projetsService.createProjet(newProjet);
    this.router.navigate(['/liste']);
  }
}

