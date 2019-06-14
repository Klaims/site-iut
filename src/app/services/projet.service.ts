import { Injectable } from '@angular/core';
import { Projet } from '../models/projet.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class ProjetService {

  constructor() { this.getProjets(); }

  projets : Projet[] = [];
  projetsSubject = new Subject<Projet[]>();

  emitProjets() { 

    this.projetsSubject.next(this.projets);
  }

  saveProjets() {

    firebase.database().ref('/projets').set(this.projets);
  }

  getProjets() {

    firebase.database().ref('/projets')
      .on('value', (data) => {

        this.projets = data.val() ? data.val() : [];
        this.emitProjets;
      });
  }

  getSingleProjet(id: Number) {

    return new Promise(

      (resolve, reject) => {

        firebase.database().ref('/projets' + id).once('value').then(

          (data) => {

            resolve(data.val());
          },

          (error) => {

            reject(error);
          }
        );
      }
    );
  }

  createProjet(proj: Projet) {

    this.projets.push(proj);
    this.saveProjets;
    this.emitProjets;
  }

  removeProjet(proj: Projet) {

    let index = this.projets.findIndex(
      (projIndex) => {

        if (projIndex === proj) {

          return true;
        }
      }
    );

    this.projets.splice(index, 1);
    this.saveProjets;
    this.emitProjets;
  }
}
