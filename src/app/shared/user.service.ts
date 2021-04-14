import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../model/user"
@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user:User;
  private url="https://lahuertapp.herokuapp.com/user"
  constructor(private http: HttpClient) { 
    this.user = new User("","")
  }

  //Get USER

  logIn(email:string,password:string){
       return this.http.get(this.url+"?email="+email+"&"+"?password="+password)
  }

  register(user:User){
    return this.http.post(this.url,user)
  }


}

