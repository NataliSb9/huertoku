import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product'
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private url: string
  private url_User: string
  private url_pedidos: string
  private url_envios: string
  private url_LaHuerta: string
  private http: HttpClient
  public producto: Product


  constructor(http: HttpClient) {

    this.url = "http://localhost:300/product"
    //this.url_LaHuerta = "https://lahuertapp.herokuapp.com/huerta"
    // this.url_User = "https://lahuertapp.herokuapp.com/user"
    // this.url_pedidos = "https://lahuertapp.herokuapp.com/pedidos"
    // this.url_envios = "https://lahuertapp.herokuapp.com/envios"
    this.http = http
    this.producto = new Product(0, "", "", 0, "", 0, "", "", 0, "")

  }

  // METODOS PARA PRODUCTO

  // ---> mostrara todos y por filtrado
  /*
  mostrarProducto (producto : Product){
    if(producto.productAmount == null && producto.productChange == null && producto.productEco ==  null && producto.productLocality == null && producto.productName == null && producto.productPrice == null && producto.productType == null)
    {
     return this.http.get( this.url + "/product" )
  
    } else {
      return this.http.get( this.url + "/product" + producto.productAmount + "&" + producto.productChange + "&" + producto.productEco + "&" + producto.productLocality + "&" + producto.productName + "&" + producto.productPrice + "&" + producto.productType )
    }
  }
  */

  //METODOS PARA LA HUERTA
  
  // get para obtener la info que se plasma en el Modal de La Huerta
  public obtenerProductoModal(idProduct: number) {
    let urlProductoHuerta = this.url + "?id=" + idProduct
    console.log(urlProductoHuerta)
    return this.http.get(urlProductoHuerta)
  }
  //Mostrar todos los productos de la Huerta

  public obtenerProductos() {
    return this.http.get(this.url)
  }

  // METODOS MPARA MIS PRODUCTOS

  // ---> Mostrar productos en "Mis Productos"
  public mostrarMisProductos(id: number) {
    let urlProductoUsuario = this.url + "?id=" + id
    return this.http.get(urlProductoUsuario)
  }

  // ---> añade producto a BBDD
  añadirProducto(newProduct: Product) {
    console.log(newProduct);

    return this.http.post(this.url, newProduct)
  }

  // ---> EDITA producto en Mis productos 
  editarProducto(producto: Product) {
    return this.http.put(this.url, producto)
  }

  // ---> ELIMINA producto en Mis productos
  eliminarProducto(idProducto: Number) {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: {
        idproduct: idProducto
      }
    }
    console.log("servicio: " + idProducto)
    return this.http.delete(this.url, options)
  }

  //convierte en un arrays de objetos de tipo producto lo que le pasamos por la Api
  convertir(respuesta: any[]): Product[] {
    let arrayProduct: Product[] = []
    for (let i = 0; i < respuesta.length; i++) {
      let contenido: Product = new Product(respuesta[i].idproduct, respuesta[i].productName, respuesta[i].productType, respuesta[i].productAmount, respuesta[i].productLocality, respuesta[i].productPrice, respuesta[i].productEco, respuesta[i].productChange, respuesta[i].iduser, respuesta[i].productImg, respuesta[i].productDescription)
      arrayProduct.push(contenido)
    }
    return arrayProduct
  }

  // ****** METODOS PARA HISTORIAL DE PEDIDOS / ENVIOS *****

  // --> mostrar historial de pedidos
  mostrar_Historial_Pedidos(id_buyer: number) {
    console.log(id_buyer);

    return this.http.get(this.url_pedidos + "?id=" + id_buyer)
  }


  // --> mostrar historial envios
  historial_envios(id_seller: number) {
    console.log(id_seller);

    return this.http.get(this.url_envios + "?id=" + id_seller)
  }
}
