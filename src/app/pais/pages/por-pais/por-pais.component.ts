import { Component, ViewChild } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent{

  constructor(private paisService: PaisService) { }
  
  @ViewChild('txtBuscar')
  txtBuscar!: any; 

  valor: string   = '';
  
  hayError: boolean = false;
  
  resultado: Pais[] = [];
 
  placeholder: string = 'Escribe un pais'



  buscar(valor: string){
    
    this.valor = valor;
    
    this.hayError = false
    
    if(valor.trim().length === 0) return
    
    this.paisService.buscarPais(valor).subscribe(paises => {

      this.resultado = paises;
    
    }, (err) => {
    
      this.hayError = true
      this.resultado = [];
    
    })
    
    
  }


  sugerencias(valor: string){
    this.hayError = false;
    
  }

  

}
