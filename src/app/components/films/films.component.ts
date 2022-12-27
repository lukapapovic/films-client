import { Component, OnInit } from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { Film } from 'src/app/interfaces/film-interfaces';
import { FilmsService } from 'src/app/services/films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent implements OnInit {
  displayedColumns:string[]=['id','naziv','opis_filma','godina'];
films:Film[]=[]
  
  constructor(private filmsService:FilmsService) { }

  ngOnInit(): void {
    this.filmsService.getAllFilms().subscribe(data=>{
      this.films=data
    })
    }
  }


