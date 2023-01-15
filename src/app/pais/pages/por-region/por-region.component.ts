import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  resultado: Pais[]   = [];
  hayError: boolean   = false;
  valor: string       = '';
  placeHolder: string = 'Escribe una región'


  constructor(private paisService: PaisService) { }

  buscar(termino: string){
    this.hayError = false
    this.paisService.buscarRegion(termino).subscribe(paises => {
      this.resultado = paises;
    }, (err) => {
      this.hayError = true
      this.valor = termino
    })
  }
}
