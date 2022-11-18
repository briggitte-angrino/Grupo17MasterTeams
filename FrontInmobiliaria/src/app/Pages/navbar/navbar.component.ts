import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  img = 'https://github.com/Edirain6/Frontend_Nucleo_Prueba/blob/main/image/NucleoLogo/Group%2011.png?raw=true'

  sesionActiva:boolean=false;

  constructor() { }

  ngOnInit(): void {
  }

}
