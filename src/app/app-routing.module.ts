import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '', pathMatch:'full',redirectTo:'principal'
  },{
    path: 'principal',
    component: PrincipalComponent,
  },{
    path: 'registro',
    component: RegistroComponent,
  },{
    path: 'contacto',
    component: ContactoComponent,
  },{
    path: 'galeria',
    component: GaleriaComponent,
  },{
    path: 'tienda',
    component: TiendaComponent,
  },
  {
    path: 'producto/:id',
    component: ProductoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
