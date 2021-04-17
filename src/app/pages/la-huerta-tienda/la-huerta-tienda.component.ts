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

  constructor(public modalDialogo: MatDialog, private productService: ProductosService) { }
 

  /******METODO PARA LLAMAR AL MODAL** */
  openDialog() {
    this.modalDialogo.open(ModalLaHuertaTiendaComponent);
  }


  ngOnInit(): void {
    this.productService.obtenerProductos().subscribe((respuesta: Product[]) => {
      this.productosHuerta = []
      for(let i = 0; i<respuesta.length ; i++){
        let prodN: Product = new Product (respuesta[i].idProduct,respuesta[i].productName,respuesta[i].productType,respuesta[i].productAmount, respuesta[i].productLocality, respuesta[i].productPrice, respuesta[i].productEco, respuesta[i].productChange, respuesta[i].iduser, respuesta[i].productImg)
        this.productosHuerta.push(prodN)
      }
      console.log(this.productosHuerta)
    })

  }

}
