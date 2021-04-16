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
  public idUser: number
  constructor(private productService: ProductosService, private usuarioProductos: UserService) {
    this.idUser = this.usuarioProductos.user.iduser
    
    this.productService.mostrarMisProductos(this.idUser).subscribe((respuesta: Product[]) => {
      this.productosUsuarios = respuesta
      console.log(this.productosUsuarios)
    })
    
    
  }

  

  ngOnInit(): void {
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