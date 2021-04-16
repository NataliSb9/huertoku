import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product'

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private url   :string
  private http  : HttpClient
  public productos: Product 

  constructor(http : HttpClient) { 

    this.url = "https://lahuertapp.herokuapp.com/product"
    this.http = http
    
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


public mostrarMisProductos(id:number){
  let urlProductoUsuario = this.url+"?iduser="+ id
  console.log(urlProductoUsuario)
  return this.http.get(urlProductoUsuario)
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

}
