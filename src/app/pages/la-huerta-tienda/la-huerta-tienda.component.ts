import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material/dialog';
import { FormControl,FormBuilder, FormGroup } from '@angular/forms';
import { ProductosService } from 'src/app/shared/productos.service'
import { Product } from 'src/app/model/product';
import { ModalLaHuertaTiendaComponent } from '../modal-la-huerta-tienda/modal-la-huerta-tienda.component';
import { Filtros } from 'src/app/model/filtros';


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
  public value: number

  constructor(private modalDialogo: MatDialog, private fomularioFilter: FormBuilder, private productService: ProductosService ) { 
    this.buildForm()
  }

  private buildForm() {
    this.myFormFilter = this.fomularioFilter.group({
      productLocality: '',
      productTypeFruta: '',
      productTypeVerdura: '',
      productTypeOtros: '',
      productEco: '',
      productChange: '',
      productName: ''
    })

  }

  changeValue(event: any) {
    
    this.value = event.value;
    return this.value
  }
 
  /******Metodo slider Filtro */
  formatLabel(value: number) {
    
    this.value = value
    if (this.value >= 100) {
      return Math.round(this.value / 100) + '€';
    }
    

    return this.value;
  }

  buscarPorFiltro(){

    let data = this.myFormFilter.value
    console.log("formulario + precio "+ this.value)
    if (data.productTypeVerdura == true) {
      data.productTypeVerdura = "verdura"
    } else {
      data.productTypeVerdura = ""
    }
    if (data.productTypeFruta == true) {
      data.productTypeFruta = "fruta"
    } else {
      data.productTypeFruta = ""
    }
    if (data.productTypeOtros == true) {
      data.productTypeOtros = "otros"
    } else {
      data.productTypeFruta = ""
    }
    if (data.productChange == true) {
      data.productChange = "yes"
    } else {
      data.productChange = ""
    }
    if (data.productEco == true) {
      data.productEco= "yes"
    } else {
      data.productEco = ""
    }
    data.productPrice= this.value

    let numberString: string = data.productPrice
    console.log("fruta -"+ data.productTypeFruta)
    console.log("verdura - "+ data.productTypeVerdura)
    console.log("precio - "+ data.productPrice)
    console.log("verdura - "+ data.productChange)

    let localizacion: Filtros = new Filtros("productLocality",data.productLocality ) 
    let productTypeFruta: Filtros = new Filtros("productType",data.productTypeFruta)
    let productTypeVerdura: Filtros = new Filtros("productType",data.productTypeVerdura)
    let productTypeOtros: Filtros = new Filtros("productType",data.productTypeOtros)
    let productEco: Filtros = new Filtros("productEco",data.productEco)
    let productChange: Filtros = new Filtros("productChange",data.productChange)
    let productPrice: Filtros = new Filtros("productPrice",numberString)
    let productName: Filtros = new Filtros ("productName", data.productName)
    
    let filtros: Filtros[] = [localizacion,productTypeFruta, productTypeVerdura,productTypeOtros ,productEco, productChange, productPrice, productName]
    let filtrosQuerie: string = ""  
    for(let i=0; i< filtros.length; i++){
      if(filtros[i].valorFiltro !== "" && filtros[i].valorFiltro !== undefined){
        filtrosQuerie +=`&${filtros[i].nombreFiltro}=${filtros[i].valorFiltro}` 
      }
    }
    console.log( "QUERY: " +filtrosQuerie)
    this.productService.mostrarProductoFiltro(filtrosQuerie).subscribe((respuesta: any []) => {
      this.productosHuerta = this.productService.convertir(respuesta)
      console.log(this.productosHuerta)
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
