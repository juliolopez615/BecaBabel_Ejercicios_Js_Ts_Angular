import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sobrenosotros',
  templateUrl: './sobrenosotros.component.html',
  styleUrls: ['./sobrenosotros.component.css']
})
export class SobrenosotrosComponent implements OnInit {

  constructor(_route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
