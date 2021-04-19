import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  
  public usuarioLogeado:User
  
  constructor(private userService: UserService) { 
   this.usuarioLogeado = this.userService.user
  }

  ngOnInit(): void {
    
    this.userService.mostrar(this.usuarioLogeado.iduser).subscribe((data:any)=>
    {
      // data=this.usuarioLogeado
      console.log(data);
      data = this.userService.user

    });

    
    };



}
  
  


