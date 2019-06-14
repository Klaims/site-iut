import { Component, OnInit } from '@angular/core';
import { Projet } from '../models/projet.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetService } from '../services/projet.service';

@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.css']
})
export class ProjetComponent implements OnInit {

  projet : Projet;

  constructor(  private route: ActivatedRoute,
                private projetService: ProjetService,
                private router: Router) { }

  ngOnInit() {

    this.projet = new Projet('','');
    const id = this.route.snapshot.params['id'];
    this.projetService.getSingleProjet(+id).then(

      (projet : Projet) => {

        this.projet = projet;
      }
    );
  }

  onBack() {

    this.router.navigate(['/projets']);
  }
}
