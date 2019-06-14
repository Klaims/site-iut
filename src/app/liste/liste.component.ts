import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProjetService } from '../services/projet.service';
import { Router } from '@angular/router';
import { Projet } from '../models/projet.model';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit {

  projets : Projet[];
  projetSub: Subscription;

  constructor(private projetsService: ProjetService, private router: Router) { }

  ngOnInit() {

    this.projetSub = this.projetsService.projetsSubject.subscribe(

      (projets : Projet[]) => {

        this.projets = projets;
      }
    );

    this.projetsService.emitProjets();
  }

  onViewProjet(id : Number) {

    this.router.navigate(['/projets','view',id]);
  }

  ngOnDestroy() {

    this.projetSub.unsubscribe();
  }
}
