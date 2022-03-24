import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  public menu:string[] = []
  constructor(private router:Router) {
    if(Usuario.token == 0){
      this.menu.push("Sobre nosotros")
      this.menu.push("Contactanos")
      this.menu.push("Login")           
    }else{
      this.menu = []
      this.menu.push("Lista Videojuegos")
      this.menu.push("Sobre nosotros")
      this.menu.push("Contactanos")
      this.menu.push("Login") 
    }
    
  }

  ngOnInit() {
  }

  public operar(target:any){
    
    if(target.id == "Lista Videojuegos"){
      this.router.navigate(['/videojuegos'])

    }else if(target.id == "Sobre nosotros"){
      this.router.navigate(['/sobrenosotros'])

    }else if(target.id == "Contactanos"){
      this.router.navigate(['/contactanos'])
    }else if(target.id == "Login"){
      this.router.navigate(['/login'])
    }
    else{
      console.log("Algo fue mal >.<")
    }
  }
}
