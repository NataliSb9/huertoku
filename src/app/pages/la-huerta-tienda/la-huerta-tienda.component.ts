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
 

  /******METODO PARA LLAMAR AL MODAL** */
  openDialog(idProduct: number){
    
    console.log("Id productto indiv" +idProduct)
    let producto: Product
    this.productService.obtenerProductoModal(idProduct).subscribe((respuesta: any) =>{
      producto = new Product(respuesta[0].idproduct,respuesta[0].productName,respuesta[0].productType,respuesta[0].productAmount, respuesta[0].productLocality, respuesta[0].productPrice, respuesta[0].productEco, respuesta[0].productChange, respuesta[0].iduser, respuesta[0].productImg)
      
      this.modalDialogo.open(ModalLaHuertaTiendaComponent,{
        data: { productName: producto.productName, productType: producto.productType, productAmount: producto.productAmount, 
          productLocality: producto.productLocality, productPrice: producto.productPrice, productChange: producto.productChange, productEco: producto.productEco,productImg: producto.productImg
        }
    })

  });
  
  }


  ngOnInit(): void {
    this.productService.obtenerProductos().subscribe((respuesta: any[]) => {
      
      this.productosHuerta = this.productService.convertir(respuesta)
    
      console.log(this.productosHuerta)
    })

  }

}
