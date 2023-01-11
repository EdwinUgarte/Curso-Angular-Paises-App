import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {
 
  //?Se pone ! para indicar que no es null
  pais!: Pais;

  constructor(private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit(): void {
    
        this.activatedRoute.params.subscribe(({id}) => {
  
                this.paisService.verPais(id).subscribe(pais => {
                this.pais = pais;
                console.log(this.pais);
                })
                
        })


    //! Forma de hacerlo con rxjs

    // this.activatedRoute.params.
    //     pipe(
    //       switchMap(({id}) => this.paisService.verPais(id))
    //     )
    //     .subscribe(resp => {
    //     console.log(resp);
    // })
  }



}
