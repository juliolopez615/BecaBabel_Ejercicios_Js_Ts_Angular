import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../entidades/videojuegos';

@Component({
  selector: 'app-formVideojuegos',
  templateUrl: './formVideojuegos.component.html',
  styleUrls: ['./formVideojuegos.component.css']
})
export class FormVideojuegosComponent implements OnInit {
  public vlist:Videojuego[] = [new Videojuego(1,"Uncharted","Naughty Dog", 8.5), new Videojuego(2,"Metal Gear Solid", "Konami", 8)]
  public id:number|string = ""
  public titulo = ""
  public comp = ""
  public valoracion: number|string = ""
  public botones = ["introducir", "modificar", "eliminar", "vaciar"]
  public disable = true
  

  constructor() { 
    //Lo he iniciado directamente en el atributo
  }

  ngOnInit() {
  }

  public introducir(){

    if(this.titulo == ""|| this.comp == ""|| this.valoracion == ""){
      alert("Rellene todos los campos :)")
      return
    }
    
    Videojuego.cont++
    this.id = Videojuego.cont

    let temp = new Videojuego(this.id,this.titulo, this.comp, this.valoracion)
    this.vlist.push(temp)
  }

  public modificar(){
    
    for(let i=0; i<this.vlist.length; i++){
      if(this.id == this.vlist[i].id){
        this.vlist[i].titulo = this.titulo
        this.vlist[i].comp = this.comp
        this.vlist[i].valoracion = this.valoracion
      }
    }
  }

  public eliminar(){
    let vlistTemp:Videojuego[] = []
    
    for(let i=0; i<this.vlist.length; i++){
      if(!(this.id == this.vlist[i].id)){
        vlistTemp.push(this.vlist[i])
      }
    }

    this.vlist = []
    this.vlist = vlistTemp.slice();
    
  }

  public vaciar(){
    
    this.id = ""
    this.titulo = ""
    this.comp = ""
    this.valoracion = ""

  }

  public seleccionar(v:any){
    
    this.id = v.id
    this.titulo = v.titulo
    this.comp = v.comp
    this.valoracion = v.valoracion
  }

  public operar(target:any){
    let id = target.id;
    console.log(id)
    switch(id){
      case 'introducir':
        this.introducir()
        break;
      case 'modificar':
        this.modificar();
        break;
      case 'eliminar':
        this.eliminar()
        break;
      case 'vaciar':
        this.vaciar()
        break;
      default:
        console.log("Algo ha ido mal >.<")
        break;
    }

  }

}
