
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

  public producto     : Product
  public user         : number

  public producto_editar : Product []
  public newProduct : Product
  public idProduct : number

  constructor(private productService : ProductosService, private userService : UserService) 
  { 
    this.user = this.userService.user.iduser
    this.idProduct = this.productService.producto.idproduct

  }

// mostrar producto a modificar --> pasado un id
mostrar_producto(){
  this.productService.obtenerProductoModal(this.user).subscribe((res:any)=>{
    this.producto_editar = res
  })
}

// modificar producto
editar_producto(productName:string, productType:string, productAmount:number, productLocality:string, productPrice:number, productEco: string, productChange:string, productImg: string ){
  console.log(this.user);
  console.log();
  

  this.productService.editarProducto(new Product(this.productService.producto.idproduct, productName, productType, productAmount, productLocality, productPrice, productEco, productChange, this.productService.producto.iduser, productImg )).subscribe((res:any)=>{
    this.producto = res

    console.log(res);
    
  })
    
  
}
 
ngOnInit(): void {
  this.mostrar_producto()
}
  

}
