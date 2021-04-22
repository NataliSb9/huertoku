import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/model/chat';
import { Mensaje } from 'src/app/model/mensaje';
import { User } from 'src/app/model/user';
import { ChatService } from 'src/app/shared/chat.service';
import { ProductosService } from 'src/app/shared/productos.service';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public chats:Chat[]
  public user:User
  public mensajes:Mensaje[]
  public mensaje:Mensaje
  public feedback:String
  constructor(public chatService:ChatService, public userService:UserService, public productService:ProductosService) {
    this.mensajes=[]
   }

   mostrarMensajes(id:number){
     console.log(id)
    this.chatService.mostrarMensajes(id).subscribe((data:any[])=>{
      this.mensajes=data
      console.log(this.mensajes);
    })
    
    
   }

   enviarMensaje(id:number, message:string, idmessenger2:number){
     console.log(idmessenger2)
    this.chatService.enviarMensaje(new Mensaje(id,message,this.userService.user.iduser,idmessenger2)).subscribe((data:Mensaje)=>{
      this.mensaje=data
      this.feedback="Mensaje enviado con éxito"
    })
   }

  ngOnInit(): void {
    
    console.log(this.userService.user.iduser)
    this.chatService.mostrarChats(this.userService.user.iduser,this.productService.producto.iduser).subscribe((data:Chat[])=>{
      this.chats=data
      console.log(data) 
    })
  }

}
