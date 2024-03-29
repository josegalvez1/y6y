import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NavComponent } from './components/nav/nav.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoListComponent } from './components/tienda/producto-list/producto-list.component';
import { ProductoItemComponent } from './components/tienda/producto-item/producto-item.component';
import { ProductoComponent } from './components/tienda/producto/producto.component';
import { TarjetasCreditoComponent } from './components/tienda/tarjetas-credito/tarjetas-credito.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaComponent,
    ProductoListComponent,
    ProductoItemComponent,
    ProductoComponent,
    TarjetasCreditoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ContactoComponent,
    FooterComponent,
    GaleriaComponent,
    NavComponent,
    PrincipalComponent,
    RegistroComponent,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
