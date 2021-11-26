import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public titulo!:string;
  public texto!:string;
  

  classToDiv = {};

  constructor() { 

    this.classToDiv = {
      'text-success': true

    };
  }
  ngOnInit(): void {
    this.titulo! ='Senai Santa Barbara D´oste';
    this.texto! ='Senai centro de formação para o mercado de trabalho';
  }

}
