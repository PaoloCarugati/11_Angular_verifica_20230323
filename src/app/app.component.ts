import { Component } from '@angular/core';
import { Veicolo } from './veicolo/veicolo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Soluzione verifica 23/03/2023';
    veicoli: Veicolo[] = 
   [
      {
          "id": 1,
          "modello": "127",
          "marca": "Fiat",
          "prezzo": 1300,
          "velocitamax": 110
  
      },
  
      {
          "id": 2,
          "modello": "Giulietta",
          "marca": "Alfa Romeo",
          "prezzo": 4000,
          "velocitamax": 180
      },
      {
          "id": 3,
          "modello": "Fiesta",
          "marca": "Ford",
          "prezzo": 1600,
          "velocitamax": 130
  
      },
      {
          "id": 4,
          "modello": "Baracca",
          "marca": "Subaru",
          "prezzo": 5500,
          "velocitamax": 170  
      }
    ];

    sortByVelocitaMax: boolean = true;
    sortLabel: string = "velocitamax (decrescente)";

    onSortClick() {
        if (this.sortByVelocitaMax)
        {
            this.veicoli = this.veicoli.sort((a, b) => b.velocitamax - a.velocitamax);
            this.sortLabel = "velocitamax (decrescente)";
        }
        else
        {
            this.veicoli = this.veicoli.sort((a, b) => a.prezzo - b.prezzo);
            this.sortLabel = "prezzo (crescente)";
        }

        this.sortByVelocitaMax = !this.sortByVelocitaMax;
    }

    ngInit() {
        this.onSortClick();
    }
}

