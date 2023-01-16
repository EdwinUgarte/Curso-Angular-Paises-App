import { Component, OnInit } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActive: string = '';

  resultado: Pais[]   = [];
  hayError: boolean   = false;
  valor: string       = '';
  placeHolder: string = 'Escribe una región'


  constructor(private paisService: PaisService) { }

  activarRegion(region: string){

    this.regionActive = region;

    this.hayError = false
    this.paisService.buscarRegion(region ).subscribe(paises => {
      this.resultado = paises;
      console.log(paises);
    }, (err) => {
      this.hayError = true
      this.valor = region
    })
  }

  }

