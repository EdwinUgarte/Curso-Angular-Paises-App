import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private endPoint : string = 'https://restcountries.com/v2';
  

  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Pais[]>{
    const url = `${this.endPoint}/name/${termino}`
    return  this.http.get<Pais[]>(url);

  }


  buscarCapital(termino: string): Observable<Pais[]>{
    const url: string = `${this.endPoint}/capital/${termino}`
    return this.http.get<Pais[]>(url);
  }


  verPais(id: string): Observable<Pais>{
    const url = `${this.endPoint}/alpha/${id}`
    return this.http.get<Pais>(url)
  }


  buscarRegion(termino: string): Observable<Pais[]>{
    const url = `${this.endPoint}/region/${termino}`;
    return this.http.get<Pais[]>(url);
  }

  getAll(): Observable<Pais[]>{
    const url = `${this.endPoint}/all`;
    return this.http.get<Pais[]>(url);
  }





}
