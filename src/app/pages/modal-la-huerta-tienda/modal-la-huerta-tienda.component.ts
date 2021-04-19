import { Component, OnInit, Inject } from '@angular/core';
import { ProductosService } from 'src/app/shared/productos.service'
import { Product } from 'src/app/model/product';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-modal-la-huerta-tienda',
  templateUrl: './modal-la-huerta-tienda.component.html',
  styleUrls: ['./modal-la-huerta-tienda.component.css']
})
export class ModalLaHuertaTiendaComponent implements OnInit {
  public idProduct: number
  public productoModal: Product
  constructor(private productService: ProductosService, @Inject(MAT_DIALOG_DATA) public data:{productName: string, productType: string, productAmount: number, 
    productLocality: string, productPrice:number, productChange: string, productImg: string, productEco: string, productDescription: string}) {
      
  }

  

  ngOnInit(): void {
    this.idProduct = this.productService.productoHuerta.idproduct
    console.log("que es "+this.idProduct)
    this.productService.obtenerProductoModal(this.idProduct).subscribe((respuesta: Product) => {
      this.productoModal = respuesta
      console.log("es un producto "+ this.productoModal)
    })
    
  }

}
