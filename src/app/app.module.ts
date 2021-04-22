import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogInComponent } from './pages/log-in/log-in.component';
import { MatStepperModule } from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FooterComponent } from './pages/footer/footer.component';
import { HeaderComponent } from './pages/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import { ListaDeseosComponent } from './pages/lista-deseos/lista-deseos.component';
import {MatIconModule} from '@angular/material/icon';
import { ChatComponent } from './pages/chat/chat.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSliderModule} from '@angular/material/slider';
import { LaHuertaTiendaComponent } from './pages/la-huerta-tienda/la-huerta-tienda.component';
import { AnadirProductoComponent } from './pages/anadir-producto/anadir-producto.component';
import { MisProductosComponent } from './pages/mis-productos/mis-productos.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { PerfilEditarComponent } from './pages/perfil-editar/perfil-editar.component';
import { PedidosActivosComponent } from './pages/pedidos-activos/pedidos-activos.component';
import { HistorialPedidosComponent } from './pages/historial-pedidos/historial-pedidos.component';
import { ModalLaHuertaTiendaComponent } from './pages/modal-la-huerta-tienda/modal-la-huerta-tienda.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HttpClientModule } from '@angular/common/http';
import { EditarProductoComponent } from './pages/editar-producto/editar-producto.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';



@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LogInComponent,
    FooterComponent,
    HeaderComponent,
    ListaDeseosComponent,
    ChatComponent,
    LaHuertaTiendaComponent,
    AnadirProductoComponent,
    MisProductosComponent,
    PerfilComponent,
    PerfilEditarComponent,
    PedidosActivosComponent,
    HistorialPedidosComponent,
    ModalLaHuertaTiendaComponent,
    LandingComponent,
    EditarProductoComponent,
    AboutUsComponent
  ],
  entryComponents:[ListaDeseosComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatStepperModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDialogModule,
    MatBadgeModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatTableModule,
    MatExpansionModule,
    MatSliderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
