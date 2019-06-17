import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { Subscription } from 'rxjs';
import { ProjetService } from '../services/projet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  projets : Projet[];
  projetSub: Subscription;

  projet1 : Projet;
  projet2 : Projet;
  projet3 : Projet;

  constructor(private projetsService: ProjetService, private router: Router) { }

  ngOnInit() {

    this.projetSub = this.projetsService.projetsSubject.subscribe(

      (projets : Projet[]) => {
        
        this.projet1 = projets[0];
        this.projet2 = projets[1];
        this.projet3 = projets[2];
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
