import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductosService } from 'src/app/shared/productos.service'
import { UserService } from 'src/app/shared/user.service'
import { User } from 'src/app/model/user'

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {

  public productosUsuarios: Product[]
  public idUser: number;
  public error: string

  constructor(private productService: ProductosService, private usuarioProductos: UserService) {
    this.idUser = this.usuarioProductos.user.iduser
  }

  deleteProducto(idProducto: Number){
    console.log("controlador: "+ idProducto)

    this.productService.eliminarProducto(idProducto).subscribe((respuesta: any)=>{
      console.log(respuesta)
      this.ngOnInit();
    },(error)=>{
      console.log(error.error)
      this.error = error.error
    })
  } 
  

  ngOnInit(): void {
    this.productService.mostrarMisProductos(this.idUser).subscribe((respuesta: any[]) => {
      
      this.productosUsuarios = this.productService.convertir(respuesta)

      console.log(this.productosUsuarios)
      
    })
  }
}

/*mostrarProductos(id: number) {
     if (isNaN(id)) {
      this.serviceDiscografica.obtenerDiscos().subscribe((respuesta: Discografia[]) => {
        this.discos = respuesta
      })
    } else {
      this.serviceDiscografica.obtenerDisco(id).subscribe((respuesta: Discografia[]) => {
        console.log(respuesta)
        this.discos = respuesta
      })
    }
  }*/