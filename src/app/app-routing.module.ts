import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './pages/chat/chat.component';
import { AnadirProductoComponent } from './pages/anadir-producto/anadir-producto.component';
import { HeaderComponent } from './pages/header/header.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { LaHuertaTiendaComponent } from './pages/la-huerta-tienda/la-huerta-tienda.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilEditarComponent } from './pages/perfil-editar/perfil-editar.component';
import { HistorialPedidosComponent } from './pages/historial-pedidos/historial-pedidos.component';
import { PedidosActivosComponent } from './pages/pedidos-activos/pedidos-activos.component';
import { MisProductosComponent } from './pages/mis-productos/mis-productos.component';
import { LandingComponent } from './pages/landing/landing.component';


const routes: Routes = 
[
  {
    path:"registro",component:RegistroComponent
  },
  {
    path:"login",component:LogInComponent
  },
  {
    path:"header",component:HeaderComponent
  },
  {
    path:"anaproducto",component:AnadirProductoComponent
  },
  {
    path:"chat",component:ChatComponent
  },
  {
    path:"huerta",component:LaHuertaTiendaComponent
  },
  {
    path:"perfil",component:PerfilComponent
  },
  {
    path:"perfileditar",component:PerfilEditarComponent
  },
  {
    path:"historialpedidos",component:HistorialPedidosComponent
  },
  {
    path:"pedidosactivos",component:PedidosActivosComponent
  },
  {
    path:"misproductos",component:MisProductosComponent
  },
  {
    path:"landing",component:LandingComponent
   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
