import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Chat } from '../model/chat';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  public chat:Chat
  private url="https://lahuertapp.herokuapp.com/chat"
  constructor(private http: HttpClient) { 
    this.chat=new Chat()
  }




  crearChat(chat:Chat){
   return this.http.post(this.url,chat)
  }
}
