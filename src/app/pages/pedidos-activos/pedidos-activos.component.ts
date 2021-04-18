import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

// importacion de user y userService
import { User } from "../../model/user"
import { UserService } from "../../shared/user.service"

// importacion de product y productService
import { Product } from "../../model/product"
import { ProductosService } from "../../shared/productos.service"

@Component({
  selector: 'app-pedidos-activos',
  templateUrl: './pedidos-activos.component.html',
  styleUrls: ['./pedidos-activos.component.css']
})
export class PedidosActivosComponent implements OnInit {

  public producto  : Product
  public user      : number

  public productos_arr : Product[]

  constructor(private productService : ProductosService, private userService : UserService) 
  {
    this.user = this.userService.user.iduser

  }

  // METODO --> mostrar envios usuario --> el usuario es el vendedor
  mostrar_historial_envios(){
    this.productService.historial_envios(this.user).subscribe((res:any)=>{
      this.productos_arr = res
    })
  }

  ngOnInit(): void {
    this.mostrar_historial_envios()

  }

}
