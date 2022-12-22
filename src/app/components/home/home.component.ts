import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
contepts=['Directives','Services','Models','Intercables'];
testValue=5
  constructor() { }

  ngOnInit(): void {
  }

}
