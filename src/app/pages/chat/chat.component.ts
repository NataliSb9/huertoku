import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { ChatService } from 'src/app/shared/chat.service';
import { UserService } from 'src/app/shared/user.service';
import { Chat } from '../../model/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  public indice : number;
  public conver:Chat[];
  public users:User[]
  public usuarioLogeado:User;
  public receptor:User;
  constructor(private userService:UserService, private chatService:ChatService, private router: Router) {
    this.usuarioLogeado = this.userService.user;
    this.receptor = this.userService.receptor;
  }

  abrir(i:number){
    this.receptor = this.users[i];
    this.indice = i;
    this.chatService.getConversacion(this.usuarioLogeado.iduser,this.receptor.iduser).subscribe((data:Chat[])=>{
      this.conver = data;
      this.router.navigateByUrl('/chat')
    });
  }

  enviar(mensaje: string)
  {
    this.conver.push(new Chat(0, this.usuarioLogeado.iduser, this.receptor.iduser, mensaje))
    this.chatService.chat = new Chat(0, this.usuarioLogeado.iduser, this.receptor.iduser, mensaje)
    this.chatService.postMensaje(this.chatService.chat).subscribe((data) =>
    {
      console.log(data);
    });
  }

  eliminarConver()
  { 
    this.chatService.deleteChat(this.usuarioLogeado.iduser,this.receptor.iduser).subscribe((data) =>
    {
      this.users.splice(this.indice,1);
      console.log(data);
    })
  }

  ngOnInit(): void {
    this.chatService.getUsuarios(this.usuarioLogeado.iduser).subscribe((data:User[])=>{
      this.users = data;
      // this.receptor = this.users[0];
      this.chatService.getConversacion(this.usuarioLogeado.iduser,this.receptor.iduser).subscribe((data:Chat[])=>{
        this.conver = data;
      });
    });
  }
}