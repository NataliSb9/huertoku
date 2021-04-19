
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

  constructor(private productService : ProductosService, private userService : UserService) 
  { 
    this.producto = this.productService.produc_selec
    this.user = this.userService.user.iduser
    console.log(this.user);
  
  }
// modificar producto
editar_producto( productName:string, productType:string, productAmount:number, productLocality:string, productPrice:number, productEco: string, productChange:string, productImg: string ){
  
  let newProduct = new Product(this.producto.idproduct, productName, productType, productAmount, productLocality, productPrice, productEco, productChange, this.productService.producto.iduser, productImg )
  
  this.productService.editarProducto(newProduct).subscribe((res:any)=>{
    this.producto = newProduct

    console.log(this.producto); 
    console.log(res);
    
  })
    
}
 
ngOnInit(): void {
 
}
  

}
