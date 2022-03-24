import { ConstantPool } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Videojuego } from 'src/app/entidades/videojuego';

@Component({
  selector: 'app-vjrow',
  templateUrl: './vjrow.component.html',
  styleUrls: ['./vjrow.component.css']
})
export class VjrowComponent implements OnInit {
  
  @Input() videojuego : Videojuego;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public detalle(){
    console.log(this.videojuego.img)
    let split = this.videojuego.img.split("./assets")
    console.log(split)

    //this.router.navigate(['/detalle', this.videojuego.id, this.videojuego.titulo, this.videojuego.img, this.videojuego.valoracion])
    this.router.navigate(['/detalle', this.videojuego.id, this.videojuego.titulo, this.videojuego.comp, split[1], this.videojuego.valoracion])
  }

}
