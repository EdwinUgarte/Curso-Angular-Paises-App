import { Component, ViewChild ,OnInit} from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Pais } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit{


  constructor(private paisService: PaisService)  { }

  ngOnInit(): void {
    
    if(!localStorage.getItem('paises')){
      this.paisService.getAll().subscribe(paises => {
        this.resultado = paises;
      })
    }

    const paisesStorage = localStorage.getItem('paises')
    this.resultado = JSON.parse(paisesStorage!) 
  }
  
  @ViewChild('txtBuscar')
  txtBuscar!: any; 

  valor: string   = '';
  
  hayError: boolean = false;
  
  resultado: Pais[] = [];

  paisesSugeridos: Pais[] = [];
  
  mostrarSugerencias: boolean = true;
 
  placeholder: string = 'Escribe un país'



  buscar(valor: string){
    
    this.valor = valor;
    
    this.hayError = false
    
    if(valor.trim().length === 0) return

    if(valor.toLowerCase() === 'all' || valor.toLowerCase() === 'todos'){
      this.paisService.getAll().subscribe(paises => {
        this.resultado = paises
        localStorage.setItem('paises', JSON.stringify(this.resultado))
      })
      return
    }

    
    this.paisService.buscarPais(valor).subscribe(paises => {

      this.resultado = paises;
      localStorage.setItem('paises', JSON.stringify(this.resultado))
    
    }, (err) => {
    
      this.hayError = true
      this.resultado = [];
    
    })
    
    
  }


  sugerencias(valor: string){
    this.hayError = false;
    this.mostrarSugerencias = true;

    this.paisService.buscarPais(valor).subscribe(paises => {
      this.paisesSugeridos = paises.splice(0,5);
    })
    
  }


  buscarSugerido(pais: string){
    this.buscar(pais);
    this.mostrarSugerencias = false;
  }
  

}
