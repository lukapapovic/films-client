import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Film } from '../interfaces/film-interfaces';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {
  apiUrl=`${environment.apiUrl}/film`

  constructor(private http:HttpClient) { }
  getAllFilms(){
    return this.http.get<Film[]>('http://localhost:3000/film');
  }
}
