import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url   :string
  private http  : HttpClient

  constructor(http : HttpClient) { 

    this.url = "https://huertaweb.herokuapp.com"
    this.http = http
  }

// METODOS PARA PRODUCTO

// ---> mostrara toos y por filtrado
mostrarProducto (producto : Product){
  if(producto.productAmount == null && producto.productChange == null && producto.productEco ==  null && producto.productLocality == null && producto.productName == null && producto.productPrice == null && producto.productType == null)
  {
   return this.http.get( this.url + "/product" )

  } else {
    return this.http.get( this.url + "/product" + producto.productAmount + "&" + producto.productChange + "&" + producto.productEco + "&" + producto.productLocality + "&" + producto.productName + "&" + producto.productPrice + "&" + producto.productType )
  }
}


// ---> añade producto a BBDD
añadirProducto (newProduct : Product){
  return this.http.post( this.url, newProduct )
}

// ---> EDITA producto en BBDD
editarProducto (producto : Product){
  return this.http.put( this.url, producto )
}

// ---> ELIMINA producto en BBDD
eliminarProducto (idProducto : number){
    return this.http.delete(this.url + "?id=" + idProducto)

}

}
