import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../model/chat';
import { Mensaje } from '../model/mensaje';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chat:Chat
  public chats:Chat[]
  public idmessenger1:number
  public idmessenger2:number
  public mensaje:Mensaje
  private url="https://lahuertapp.herokuapp.com/chat"
  private urlmes="https://lahuertapp.herokuapp.com/message"
  constructor(private http: HttpClient) { 
    this.chat=new Chat()
  }




  crearChat(chat:Chat){
   return this.http.post(this.url,chat)
  }

  mostrarChats(idmessenger1:number,idmessenger2:number){
    return this.http.get(this.url+"?id1="+idmessenger1+"&"+"id2="+idmessenger2)
  }

  mostrarMensajes(id:number){
    return this.http.get(this.urlmes+"?id="+id)
  }

  enviarMensaje(mensaje:Mensaje){
    return this.http.post(this.urlmes,mensaje)
  }

}
