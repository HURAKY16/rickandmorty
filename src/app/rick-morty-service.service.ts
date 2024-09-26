import { HttpClient } from '@angular/common/Http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyServiceService {
  
  private apiUrl=' https://rickandmortyapi.com/api';
  constructor(private http:HttpClient) { }
  
  getpersonajes():Observable <any>{
  return this.http.get<any>(`${this.apiUrl}/character`)
  }
  
  getpersonaje(id:number):Observable <any>{
    return this.http.get<any>(`${this.apiUrl}/character/${id}`)
    }

    getcapitulos(): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/episode`); 
    }
    
    getcapitulo(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/episode/${id}`); 
    }
  }