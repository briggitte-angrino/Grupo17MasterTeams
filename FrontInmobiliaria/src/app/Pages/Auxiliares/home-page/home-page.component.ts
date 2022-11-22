import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  img = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/LOGO_Principal.png?raw=true';
  casa = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/casa01.png?raw=true';
  search = 'https://images.vexels.com/media/users/3/128480/isolated/lists/0582ce1095705aa691a4938302de2dce-linea-de-lupa-purpura-icon-svg.png'

  constructor() { }

  ngOnInit(): void {
  }

}
