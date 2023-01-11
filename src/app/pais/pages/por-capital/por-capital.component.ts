import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent {

  constructor(private paisService: PaisService) { }

  termino: string = '';

  resultado: Pais[] = []

  hayError: boolean = false;

  placeholder: string = 'Escribe una capital'


  buscar(termino: string){
    
    this.hayError = false
    this.termino = termino;

    this.paisService.buscarCapital(termino).subscribe(resp => {
      
      this.resultado = resp;
    
    }, (err) => {
    
      this.hayError = true;
      console.log(err);
    
    })
  }

}
