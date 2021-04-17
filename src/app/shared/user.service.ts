
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from "../model/user"



@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:User;
  private url="https://lahuertapp.herokuapp.com/user"
  private urlogin="https://lahuertapp.herokuapp.com/login"
  private urlchat="https://lahuertapp.herokuapp.com/chat"
  constructor(private http: HttpClient) { 
    this.user = new User("","")
  }

  //Get USER

  logIn(user:User){
      console.log(user)
      
      return this.http.post(this.urlogin,user)
  }

  register(user:User){
    return this.http.post(this.url,user)
  }

  editProfile(user:User){
    console.log(user)
    return this.http.put(this.url,user)
  }

  obtenerChat(id:number){
    return this.http.get(this.urlchat+"?id="+id)
  }

}

