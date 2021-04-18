import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { ProductosService } from 'src/app/shared/productos.service'
import { Product } from 'src/app/model/product';
import { ModalLaHuertaTiendaComponent } from '../modal-la-huerta-tienda/modal-la-huerta-tienda.component';


@Component({
  selector: 'app-la-huerta-tienda',
  templateUrl: './la-huerta-tienda.component.html',
  styleUrls: ['./la-huerta-tienda.component.css']
})
export class LaHuertaTiendaComponent implements OnInit {

  public productosHuerta: Product[]
  public producto: Product
  public idProduct: number

  constructor(public modalDialogo: MatDialog, private productService: ProductosService) { }
 

  /******METODO PARA LLAMAR AL MODAL****/

  openDialog(producto: Product){

      this.modalDialogo.open(ModalLaHuertaTiendaComponent,{
        data: { productName: producto.productName, productType: producto.productType, productAmount: producto.productAmount, 
          productLocality: producto.productLocality, productPrice: producto.productPrice, productChange: producto.productChange, productEco: producto.productEco,productImg: producto.productImg, productDescription: producto.productDescription
        }
    })
  
  }


  ngOnInit(): void {
    this.productService.obtenerProductos().subscribe((respuesta: any[]) => {
      
      this.productosHuerta = this.productService.convertir(respuesta)
    
      console.log(this.productosHuerta)
    })

  }

}
