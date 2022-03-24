import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
    public _id:number|string = 0;
    public _titulo = "";
    public _comp = "";
    public _img = "";
    public _valoracion:number|string = 0;

  constructor(_route:ActivatedRoute) {
    this._id = _route.snapshot.params["id"]
    this._titulo = _route.snapshot.params["titulo"]
    this._comp = _route.snapshot.params["comp"]
    this._img = "./assets" + _route.snapshot.params["img"]
    this._valoracion = _route.snapshot.params["valoracion"]
  }

  ngOnInit(): void {
  }

}
