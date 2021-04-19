
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

  public myForm    : FormGroup


  constructor(private formBuilder: FormBuilder, private productService : ProductosService, private userService : UserService) 
  { 
    this.producto = this.productService.produc_selec
    this.user = this.userService.user.iduser
    this.buildForm();
    console.log(this.user);
  
  }

// ---> VALIDACIONES DE FORMULARIO
private buildForm()
{
  this.myForm = this.formBuilder.group
  ({
    productName:[,Validators.required],
    productType:[,Validators.required],
    productAmount:[,Validators.required],
    productPrice:[,Validators.required],
    productEco:[,Validators.required],
    productChange:[,Validators.required],
    productLocality:[,Validators.required]
    // productoImg:[,Validators.required]
  })
}

// modificar producto
editar_producto(){
    
    let datosForm = this.myForm.value

    let newProduct = new Product(this.producto.idproduct, datosForm.productName, datosForm.productType, datosForm.productAmount, datosForm.productLocality, datosForm.productPrice, datosForm.productEco, datosForm.productChange, this.productService.producto.iduser, datosForm.productImg )
    
    this.productService.editarProducto(newProduct).subscribe((res:any)=>{
      this.producto = newProduct

      console.log(this.producto); 
      console.log(res);
    
    })
  
}
 
ngOnInit(): void {
 
}
  

}
