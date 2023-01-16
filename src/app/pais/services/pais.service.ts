import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private endPoint : string = 'https://restcountries.com/v2';

  get httpParams(){
    return new HttpParams().set('fields', 'name,flag,population,alpha2Code')
  }
  
  // https://restcountries.com/v2/all?fields=name,flag,population
  constructor(private http: HttpClient) { }


  buscarPais(termino: string): Observable<Pais[]>{
    const url = `${this.endPoint}/name/${termino}`
    return  this.http.get<Pais[]>(url, {params: this.httpParams});

  }


  buscarCapital(termino: string): Observable<Pais[]>{
    const url: string = `${this.endPoint}/capital/${termino}`
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }


  verPais(id: string): Observable<Pais>{
    const url = `${this.endPoint}/alpha/${id}`
    return this.http.get<Pais>(url)
  }


  buscarRegion(termino: string): Observable<Pais[]>{
    
    
    const url = `${this.endPoint}/region/${termino}`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }

  getAll(): Observable<Pais[]>{
    const url = `${this.endPoint}/all`;
    return this.http.get<Pais[]>(url, {params: this.httpParams});
  }





}
