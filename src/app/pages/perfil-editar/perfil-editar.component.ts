import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-perfil-editar',
  templateUrl: './perfil-editar.component.html',
  styleUrls: ['./perfil-editar.component.css']
})
export class PerfilEditarComponent implements OnInit {
  public usuarioLogeado:User
  public message;
  constructor(private userService: UserService) { 
    this.usuarioLogeado=this.userService.user
  }

  saveChanges( username:string,tel:number,email:string,localidad:string,userImg:string){
    console.log(this.usuarioLogeado)
    this.userService.editProfile(new User(email,this.usuarioLogeado.password,this.usuarioLogeado.iduser,this.usuarioLogeado.name,this.usuarioLogeado.surname1,this.usuarioLogeado.surname2,this.usuarioLogeado.birthyear,username,localidad,tel,userImg)).subscribe((data:any)=>{
     
        this.usuarioLogeado=data
        this.message="Dato/s modificados"
      
      // this.usuarioLogeado=data
    })
  }

  ngOnInit(): void {
  }

}
