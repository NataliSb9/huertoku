import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
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
  public myFormFilter: FormGroup

  constructor(private modalDialogo: MatDialog, private fomularioFilter: FormBuilder, private productService: ProductosService ) { 
    this.buildForm()
  }

  private buildForm() {
    this.myFormFilter = this.fomularioFilter.group({
      productLocality: '',
      productTypeFruta: '',
      productTypeVerdura: '',
      productEco: '',
      productChange: ''
    })

  }
 
  /******Metodo slider Filtro */
  formatLabel(value: number) {
    if (value >= 100) {
      return Math.round(value / 100) + '€';
    }

    return value;
  }

  buscarPorFiltro(){
    let data = this.myFormFilter.value
    console.log(data)
    let localizacion = data.productLocality
    let productTypeFruta = data.productTypeFruta
    let productTypeVerdura = data.productTypeFruta
    let productEco = data.productEco
    let productChange = data.productChange
    let productPrice = data.productPrice
     
    if(productTypeVerdura == true){
      productTypeVerdura = "si"
    }else{
      productTypeVerdura = null
    }

    if(productTypeFruta == true){
      productTypeFruta = "no"
    }else{
      productTypeFruta= null
    }
    
    this.productService.mostrarProductoFiltro(localizacion,productPrice,productTypeFruta, productTypeVerdura, productEco, productChange).subscribe((respuesta: any[]) =>{
      this.productosHuerta = this.productService.convertir(respuesta)
      console.log(localizacion,productPrice,productTypeFruta, productTypeVerdura, productEco, productChange)
    })


  }


  /******METODO PARA LLAMAR AL MODAL****/

  openDialog(producto: Product){

      this.modalDialogo.open(ModalLaHuertaTiendaComponent,{
        data: { productName: producto.productName, productType: producto.productType, productAmount: producto.productAmount, 
          productLocality: producto.productLocality, productPrice: producto.productPrice, productChange: producto.productChange, productEco: producto.productEco,productImg: producto.productImg, productDescription: producto.productDescription
        }
    })
  
  }
  meterEnCarrito(id:number){
    
    this.productService.obtenerProductoModal(id).subscribe((data:Product)=>{
      this.productService.productos.push(data[0])
      
    })
    console.log(this.productService.productos);
    
    
  }

  ngOnInit(): void {
    this.productService.obtenerProductos().subscribe((respuesta: any[]) => {
      
      this.productosHuerta = this.productService.convertir(respuesta)
    
      console.log(this.productosHuerta)
    })

  }

}
