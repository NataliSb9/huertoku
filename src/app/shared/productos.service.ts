import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product'
import { User } from '../model/user';
import { Transaction } from '../model/transaction';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {


  private url: string
  private url_User: string
  private url_pedidos: string
  private url_envios: string
  private url_productos: string
  private url_laHuerta: string
  private url_transaction : string
  private http: HttpClient
  public productos:Product[]
  public producto: Product
  public productoHuerta: Product
  public transaction: Transaction

  public produc_selec : Product

  constructor(http: HttpClient) {
    this.http = http
    
    this.producto       = new Product(0)
    this.url_User = "https://lahuertapp.herokuapp.com/user"
    this.url_pedidos = "https://lahuertapp.herokuapp.com/pedidos"
    this.url_envios = "https://lahuertapp.herokuapp.com/envios"
    this.url_productos = "https://lahuertapp.herokuapp.com/product"
    this.url_transaction = "https://lahuertapp.herokuapp.com/transaction"
    // this.url_productos = "http://localhost:300/product"

    this.productoHuerta = new Product (0,"","",0,"",0,"","",0,"")
    this.productos=[]
  }


// ---> mostrara producto pasado por id
  public obtenerProductoModal(idProduct: number){
    let urlProductoHuerta = this.url_productos +"?id="+ idProduct
    console.log(urlProductoHuerta)
    return this.http.get(urlProductoHuerta)
  }

  //Mostrar prodducto por filtro
  mostrarProductoFiltro(querieFiltro: string) {
    console.log(this.url_productos + "?" + querieFiltro)
    return this.http.get(this.url_productos + "?" + querieFiltro)

  }

//Mostrar todos los productos de la Huerta


  public obtenerProductos() {
    return this.http.get(this.url_productos)
  }

  // ******* METODOS PARA MIS PRODUCTOS *******

  // ---> Mostrar productos en "Mis Productos"
  public mostrarMisProductos(idUser: number) {
    let urlProductoUsuario = this.url_productos+"?iduser=" +idUser
    return this.http.get(urlProductoUsuario)
  }

  // ---> añade producto a BBDD
  añadirProducto(newProduct: Product) {

    console.log(newProduct.productDescription);

    return this.http.post(this.url_productos, newProduct)
  }

  // ---> EDITA producto en Mis productos 
  editarProducto(producto: Product) {
    console.log(producto);
    
    return this.http.put(this.url_productos, producto)
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
    return this.http.delete(this.url_productos, options)
  }

  // ---> convierte en un arrays de objetos de tipo producto lo que le pasamos por la Api
  convertir(respuesta: any[]): Product[] {

    let arrayProduct: Product[] = []

    for (let i = 0; i < respuesta.length; i++) {
      let contenido: Product = new Product(respuesta[i].idproduct, respuesta[i].productName, 
        respuesta[i].productType, respuesta[i].productAmount, respuesta[i].productLocality, 
        respuesta[i].productPrice, respuesta[i].productEco, respuesta[i].productChange, 
        respuesta[i].iduser, respuesta[i].productImg, respuesta[i].productDescription)
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

  meterTransaction(transaction:Transaction)
  {
    return this.http.post(this.url_transaction,transaction)
  }


  // public obtenerProductosModal(idProduct: number){
      
  //   let urlProductoHuerta = this.url_productos +"?id="+ idProduct
  //   console.log(urlProductoHuerta)
  //   return this.http.get(urlProductoHuerta)
  // }

}

  

// METODOS PARA PRODUCTO

// ---> mostrara todos y por filtrado
/*

*/



