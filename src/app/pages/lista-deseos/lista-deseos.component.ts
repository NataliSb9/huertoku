import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
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
  public chats:string[]
  public productito:Product
  public chat:Chat
  public userProduct:User
  public mensaje:string
  constructor(public productService:ProductosService, public userService:UserService, public chatService:ChatService) { 
    this.productos=this.productService.productos
    
  }

  abrirChat(id:number){
    this.userService.mostrar(id).subscribe((res:User)=>{
      console.log(res)
      this.chatService.crearChat(new Chat(this.userService.user.iduser,res.iduser,0,this.userService.user.name,res.name,this.userService.user.userImg,res.userImg)).subscribe((data:Chat)=>{
        this.chatService.chat=data
        this.mensaje="Chat creado con el vendedor"
        console.log(data)
      })
    })
   
    
    
  }
 
  ngOnInit(): void {
    
    


    this.productos=this.productService.productos
   
    console.log(this.productos);
  }

}
