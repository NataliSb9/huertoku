import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductosService } from 'src/app/shared/productos.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-lista-deseos',
  templateUrl: './lista-deseos.component.html',
  styleUrls: ['./lista-deseos.component.css']
})
export class ListaDeseosComponent implements OnInit {
  public productos:Product[]
  public productito:Product
  constructor(public productService:ProductosService, public userService:UserService) { 
    this.productos=this.productService.productos
    
  }

  ngOnInit(): void {
    
    this.productos=this.productService.productos
   
    console.log(this.productos);
  }

}
