import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject, debounceTime } from 'rxjs';


@Component({
  selector: 'app-buscar-pais',
  templateUrl: './buscar-pais.component.html',
  styleUrls: ['./buscar-pais.component.css']
})
export class BuscarPaisComponent implements OnInit{

  @Output()
  onEnter    : EventEmitter<string> = new EventEmitter();
  
  @Output()
  onDebounce : EventEmitter<string> = new EventEmitter();

  @Input('placeholder')
  placeholder: string = '';
  
  debouncer: Subject<string> = new Subject();
  
  termino: string = '';  
  
  ngOnInit(): void {
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor)
    })  
  }

  buscar(){
    this.onEnter.emit(this.termino);
   
  }

  teclaPresionada() {
  
    this.debouncer.next(this.termino);
    
  }


}