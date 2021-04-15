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
  constructor(private userService: UserService) { 
    this.usuarioLogeado=this.userService.user
  }

  saveChanges(username:string,tel:number,email:string,localidad:string){
    this.userService.editProfile(this.usuarioLogeado).subscribe
  }

  ngOnInit(): void {
  }

}
