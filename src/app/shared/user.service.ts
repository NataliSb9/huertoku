
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { User } from "../model/user"
import { Observable } from 'rxjs';

type EntityResponseType = HttpResponse<User>;
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

  logIn(email:string,password:string):Observable<EntityResponseType>{
       return this.http.get<User>(this.url+"?email="+email+"&"+"?password="+password,{observe: 'response'})
       
  }

  register(user:User){
    return this.http.post(this.url,user)
  }



}

