import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

// importacion de user y userService
import { User } from "../../model/user"
import { UserService } from "../../shared/user.service"

// importacion de product y productService
import { Product } from "../../model/product"
import { ProductosService } from "../../shared/productos.service"

@Component({
  selector: 'app-historial-pedidos',
  templateUrl: './historial-pedidos.component.html',
  styleUrls: ['./historial-pedidos.component.css']
})
export class HistorialPedidosComponent implements OnInit {

  public producto  : Product
  public user      : number

  public productos_arr : Product[]

  constructor(private productService : ProductosService, private userService : UserService) 
  { 
    this.user = this.userService.user.iduser

  }

  // METODO --> mostrar pedidos de usuario
  mostrar(){
    this.productService.mostrar_Historial_Pedidos(this.user).subscribe((res:any)=>{
      console.log(res);
      this.productos_arr = res
      
    })
  }

  ngOnInit(): void {
   this.mostrar()
  }

}
