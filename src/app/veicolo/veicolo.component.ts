import { Component, Input } from '@angular/core';
import { Veicolo } from './veicolo.model';

@Component({
  selector: 'app-veicolo',
  templateUrl: './veicolo.component.html',
  styleUrls: ['./veicolo.component.css']
})
export class VeicoloComponent {
  @Input() veicolo: Veicolo;


  ngInit() {
    
  }
}
