import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/entidades/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  _userList: Usuario[] = []
  user = ""
  password = ""

  constructor(private router:Router) {
    Usuario.token = 0
    Usuario.userNAme = ""
    this._userList.push(new Usuario("julio", "pass1234"))
    this._userList.push(new Usuario("julio", "otra1234"))
    this._userList.push(new Usuario("felix", "avenger"))
    this._userList.push(new Usuario("marcos", "pepega"))
    this._userList.push(new Usuario("clara", "pog123"))
  }
  
  /**
   * 
   * @param user usuario de la clase Usuario (definida en la carpeta entidades) que se utiliza para la comprobación del login
   * @returns Devuelve 1 si existe el usuario y la contraseña, -1 si el usuario existe pero su contraseña es incorrecta, 
   * -2 si no existe el usuario y por tanto no se comprueba la contraseña y 0 en caso de que se produzca algún otro error 
   * en la comprobación del usuario
   */
  public comprobar(user:Usuario){
    let nombre = user.usuario
    let password = user.password
    let flag = 0

    for(let i=0; i < this._userList.length; i++){
      
      if(nombre == this._userList[i].usuario){
        flag = 1
        if(password == this._userList[i].password){
          //Todo ok
          return 1
        }
      }
    }

    //Contraseña incorrecta
    if(flag == 1){
      return -1
    }
    
    //Usuario no existe
    if (flag == 0){
      return -2
    }

    return 0
  }

  public validar(){
    let temp: Usuario = new Usuario(this.user, this.password)
    
    if (this.comprobar(temp) == 1){
      Usuario.token = 1
      this.router.navigate(['/videojuegos', temp.usuario])
    }else if(this.comprobar(temp) == -1){
      alert("Contraseña incorrecta")
    }else if(this.comprobar(temp) == -2){
      alert("Usuario no existe")
    }else{
      console.log("Algo fue mal")
    }    
  }

  ngOnInit(): void {
  }

}
