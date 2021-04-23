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
  public idchat: number
  public idMessenger2:number
  constructor(public chatService:ChatService, public userService:UserService, public productService:ProductosService) {
    this.mensajes=[]
    this.idchat=0
   }

   mostrarMensajes(id:number){
     console.log(id)
      this.idchat=id
      this.chatService.mostrarMensajes(id).subscribe((data:any[])=>{
      this.mensajes=data
      this.idMessenger2=this.productService.producto.iduser
      console.log(this.mensajes);
    })
    
    
   }

   enviarMensaje(message:string){
    
    this.chatService.enviarMensaje(new Mensaje(this.idchat,message,this.userService.user.iduser,this.idMessenger2)).subscribe((data:Mensaje)=>{
      this.mensaje=data
      this.feedback="Mensaje enviado con éxito"
      this.mostrarMensajes(this.idchat);
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
