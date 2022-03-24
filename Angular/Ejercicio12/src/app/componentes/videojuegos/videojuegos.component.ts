import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-videojuegos',
  templateUrl: './videojuegos.component.html',
  styleUrls: ['./videojuegos.component.css']
})
export class VideojuegosComponent implements OnInit {

  public vlist:Videojuego[] = []
  videojuego : Videojuego | null = null
  public nombre = ""
  
  
  constructor(_route:ActivatedRoute, private router:Router) { 
    if(Usuario.token == 0){
      alert("Necesita estar Logeado para acceder a la lista de videojuegos")
      this.router.navigate(['/login'])

    }
    this.vlist.push(new Videojuego(1,"Uncharted","Naughty Dog","./assets/uncharted.png", 8.5))
    this.vlist.push(new Videojuego(2,"Metal Gear Solid", "Konami", "./assets/metalgear.png", 8))
    this.vlist.push(new Videojuego(3,"Bloodborne", "JapanStudio", "./assets/bloodborne.jpg", 7.5))
    this.vlist.push(new Videojuego(4,"Assassin's Creed", "Ubisoft", "./assets/assassins.jpg", 9))
    this.nombre = _route.snapshot.params["nombre"]
  }

  ngOnInit() {
  }


}


