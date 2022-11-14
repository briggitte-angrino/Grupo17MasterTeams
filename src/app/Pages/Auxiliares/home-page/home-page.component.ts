import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  img = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/LOGO_Principal.png?raw=true';
  casa = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/casa01.png?raw=true';
  search = 'https://github.com/Edirain6/MasterTeam_Grupo3_G17/blob/Edi/src/assets/image/%F0%9F%A6%86%20icon%20_Search_.png?raw=true'

  constructor() { }

  ngOnInit(): void {
  }

}
