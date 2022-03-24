import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { LoginComponent } from './componentes/login/login.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';

const routes: Routes = [
  {
    path : '', //En este caso decimos el componente que mostraremos por defecto
    component : LoginComponent,
  },
  {
    path : 'videojuegos', //cuando definimos el 'path' no puede empezar por '/'
    component : VideojuegosComponent
  },
  {
    path : 'login', //cuando definimos el 'path' no puede empezar por '/'
    component : LoginComponent
  },
  {
    path : 'contactanos', //cuando definimos el 'path' no puede empezar por '/'
    component : ContactanosComponent
  },
  {
    path : 'sobrenosotros', //cuando definimos el 'path' no puede empezar por '/'
    component : SobrenosotrosComponent
  },
  {
    path : 'contactanos', //cuando definimos el 'path' no puede empezar por '/'
    component : ContactanosComponent
  },  
  { path : 'videojuegos/:nombre', 
    component : VideojuegosComponent
  },
  { path : 'detalle', 
    component : DetalleComponent
  },
  { //path : 'detalle/:id/:titulo/:comp/:img/:valoracion',
    path : 'detalle/:id/:titulo/:comp/:img/:valoracion', 
    component : DetalleComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
