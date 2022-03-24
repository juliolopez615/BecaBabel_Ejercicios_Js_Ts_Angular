import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { VideojuegosComponent } from './componentes/videojuegos/videojuegos.component';
import { VjrowComponent } from './componentes/vjrow/vjrow.component';
import { SobrenosotrosComponent } from './componentes/sobrenosotros/sobrenosotros.component';
import { ContactanosComponent } from './componentes/contactanos/contactanos.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    VideojuegosComponent,
    VjrowComponent,
    SobrenosotrosComponent,
    ContactanosComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
