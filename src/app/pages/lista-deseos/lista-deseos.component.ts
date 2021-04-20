import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { Product } from 'src/app/model/product';
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
  constructor(public productService:ProductosService, public userService:UserService, public chatService:ChatService) { 
    this.productos=this.productService.productos
    
  }

  abrirChat(id:number){

    console.log(id)
    console.log(this.userService.user.iduser)
    this.chatService.crearChat(new Chat(this.userService.user.iduser,id,0)).subscribe((data:Chat)=>{
      this.chatService.chat=data
      console.log(data)
    })
  }

  ngOnInit(): void {
    
    this.productos=this.productService.productos
   
    console.log(this.productos);
  }

}
