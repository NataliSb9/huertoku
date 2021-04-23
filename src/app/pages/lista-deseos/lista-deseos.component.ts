import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { Product } from 'src/app/model/product';
import { Transaction } from 'src/app/model/transaction';
import { ChatService } from 'src/app/shared/chat.service';
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
  public chat:Chat
  public mensaje:string
  constructor(public productService:ProductosService, public userService:UserService, public chatService:ChatService) { 
    this.productos=this.productService.productos
    
  }

  abrirChat(id:number){

    console.log(id)
    console.log(this.userService.user.iduser)
    this.chatService.crearChat(new Chat(this.userService.user.iduser,id,0)).subscribe((data:Chat)=>{
    this.chatService.chat=data
    this.mensaje = "Se ha creado un chat"
    
    })
  }

  meterDeseos(id:number,idProducto:number,amount:number)
  {
    this.productService.meterTransaction(new Transaction(0,this.userService.user.iduser,id,idProducto,amount)).subscribe((data:Transaction)=>{

      this.productService.transaction=data;
      this.mensaje = "Producto añadido a historial de pedidos"

    })
  }

  ngOnInit(): void {
    
    this.productos=this.productService.productos
   
    console.log(this.productos);
  }

}
