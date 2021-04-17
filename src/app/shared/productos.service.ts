import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url           : string
  private url_User      : string
  private url_pedidos   : string
  private url_envios    : string

  private http        : HttpClient
  

  constructor(http : HttpClient) { 

    this.url            = "https://lahuertapp.herokuapp.com/product"
    this.url_User       = "https://lahuertapp.herokuapp.com/user"
    this.url_pedidos    = "https://lahuertapp.herokuapp.com/pedidos"
    this.url_envios     = "https://lahuertapp.herokuapp.com/envios"

    this.http           = http
  }

// METODOS PARA PRODUCTO

// ---> mostrara todos y por filtrado
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
  console.log(newProduct);
  
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


// ****** METODOS PARA HISTORIAL DE PEDIDOS / ENVIOS *****

// --> mostrar historial de pedidos
mostrar_Historial_Pedidos(id_buyer: number){
  console.log(id_buyer);

  return this.http.get(this.url_pedidos  + "?id=" + id_buyer)
}

// --> mostrar historial envios
historial_envios(id_seller: number){
  console.log(id_seller);

  return this.http.get(this.url_envios + "?id=" + id_seller )
}
}
