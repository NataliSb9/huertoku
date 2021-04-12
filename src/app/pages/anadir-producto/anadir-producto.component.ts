import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-anadir-producto',
  templateUrl: './anadir-producto.component.html',
  styleUrls: ['./anadir-producto.component.css']
})
export class AnadirProductoComponent implements OnInit {

  public myProduct:FormGroup

  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }

  public register()
  {
    const product = this.myProduct.value;
    console.log(product)
  }

  private buildForm()
  {
    this.myProduct = this.formBuilder.group
    ({
      productName:[,Validators.required],
      productType:[,Validators.required],
      productAmount:[,Validators.required],
      productPrice:[,Validators.required]
    })
  }
  // productEco:[,Validators.required],
  // productChange:[,Validators.required],
  // productLocality:[,Validators.required],

  ngOnInit(): void {
  }

}
