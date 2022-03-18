import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejer10',
  templateUrl: './ejer10.component.html',
  styleUrls: ['./ejer10.component.css']
})
export class Ejer10Component implements OnInit {
  public listOperaciones:string[] = ["sumar", "restar", "multiplicar", "dividir"]
  public simbolos:string[] = ["+", "-", "*", "/"]
  public value:string = ""
  public value2:string = ""
  public resultado:number|string = 0

  constructor() {

  }

  ngOnInit() {
  }

  operar(target:any){
    let id = target.id;
    let operacion = this.value.trim().split(id);
  
    console.log
    switch (id) {
      case '+':
          this.resultado = parseInt(this.value) + parseInt(this.value2)
          break;
      case '-':
          this.resultado = parseInt(this.value) - parseInt(this.value2)
          break;
      case '*':
          this.resultado = parseInt(this.value) * parseInt(this.value2)
          break;
      case '/':
          this.resultado = (parseInt(this.value) / parseInt(this.value2)).toFixed(2)
          break;
      default:
        console.log("Algo ha ido mal")
        break;
    }  
  }

}
