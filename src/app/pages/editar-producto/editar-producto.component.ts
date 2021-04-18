
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importacion de user y userService
import { User } from "../../model/user"
import { UserService } from "../../shared/user.service"

// importacion de product y productService
import { Product } from "../../model/product"
import { ProductosService } from "../../shared/productos.service"



@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {

  public producto  : Product
  public user      : number

  constructor(private productService : ProductosService, private userService : UserService) 
  { 
    this.user = this.userService.user.iduser
  }



  
  ngOnInit(): void {
  }

}
