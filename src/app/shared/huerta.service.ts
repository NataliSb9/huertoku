import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class HuertaService {

  private url: string = "https://lahuertapp.herokuapp.com/"

  constructor(private http: HttpClient) { }

  
  
}
