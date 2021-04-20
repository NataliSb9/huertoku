import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


// importacion de modulo y servicio
import { Product } from '../../model/product'
import { ProductosService } from '../../shared/productos.service'

// importacion de userService y User
import { UserService } from "../../shared/user.service"
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css']
})

export class AnadirProductoComponent implements OnInit {

  public myForm    : FormGroup
  public producto  : Product
  public user      : User
  public mensaje   : string
  public productoAgregado : boolean

  constructor(private formBuilder: FormBuilder, private apiService : ProductosService, private userService : UserService) 
  { 
    this.buildForm();
    this.user = this.userService.user
   
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
      productLocality:[,Validators.required],
      productDescription: [""]
    })
  }
  
  // ---> AÑADIR PRODUCTO
  public register(imgForm:HTMLInputElement)
  {
    
    let datosForm = this.myForm.value
    console.log(datosForm);
    
    let producto = new Product(0,datosForm.productName, datosForm.productType, datosForm.productAmount, datosForm.productLocality, datosForm.productPrice, datosForm.productEco, datosForm.productChange, this.user.iduser, imgForm.value, datosForm.productDescription)
    console.log("USER ID:" + this.user.iduser);
   
    // let product:Product = new Product(data.productName, data.productType, data.productAmount, data.productPrice, data.productEco, data.productChange, data.productLocality)
    this.apiService.añadirProducto(producto).subscribe((res: any) => {
      let mensaje = res.mensaje
      this.mensaje = mensaje.toString()
      if (this.mensaje == "Producto añadido") {
        this.productoAgregado = true
      } else {
        this.productoAgregado = false
      }

    })
  }

  ngOnInit(): void { }

}
