import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// importacion de modulo y servicio
import { Product } from '../../model/product'
import { ProductosService } from '../../shared/productos.service'

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css']
})

export class AnadirProductoComponent implements OnInit {

  public myForm    : FormGroup
  public producto  : Product



  constructor(private formBuilder: FormBuilder, private apiService : ProductosService) 
  { 
    this.buildForm();
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
    })
  }
  // productEco:[,Validators.required],
  // productChange:[,Validators.required],
  // productLocality:[,Validators.required],


  // ---> AÑADIR PRODUCTO
  public register()
  {
    let data = this.myForm.value;
    console.log(data)

    let product:Product = new Product(data.productName, data.productType, data.productAmount, data.productPrice, data.productEco, data.productChange, data.productLocality)

    this.apiService.añadirProducto(product).subscribe((res:any)=>{

      // console.log(res);
      // control de errores!!!!!!!!

    })

    }



    ngOnInit(): void {}

  }
