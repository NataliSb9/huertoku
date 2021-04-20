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
  public edit;
  public error;
  constructor(private userService: UserService) { 
    this.usuarioLogeado=this.userService.user
  }

  // saveChanges(email:string, password:string, name:string, surname1:string, birthYear:number, username:string, localidad:string, tel:number, userImg:string){
  //   console.log(this.usuarioLogeado)
  //   this.userService.editProfile(new User(email, password, this.usuarioLogeado.iduser, name, surname1, birthYear, username, localidad, tel, userImg)).subscribe((data:any)=>{
        
  //       this.usuarioLogeado=data
  //       this.message="Dato/s modificados"
  //       console.log(data);
      
  //   })
  // }
  ////////////////////////////////////////////////
  saveChanges(email:string, password:string, name:string, surname1:string, birthYear:number, username:string, localidad:string, tel:number, userImg:string) 
  {
    if (this.usuarioLogeado.iduser !== undefined) 
  {
      if (email === "") 
      {
        email = null
      } 
      else 
      {
        email = email
      }

      if (password === "") 
      {
        password = null
      } 
      else 
      {
        password = password
      }

      if (name === "") 
      {
        name = null
      } 
      else 
      {
        name = name
      }

      if (surname1 === "") 
      {
        surname1 = null
      } 
      else 
      {
        surname1 = surname1
      }

      if (birthYear === null) 
      {
        birthYear = null
      } 
      else 
      {
        birthYear = birthYear
      }   

      if (username === "") 
      {
        username = null
      } 
      else 
      {
        username = username
      }

      if (localidad === "") 
      {
        localidad = null
      } 
      else 
      {
        localidad = localidad
      } 

      if (tel === null) 
      {
        tel = null
      } 
      else 
      {
        tel = tel
      } 

      if (userImg === "") 
      {
        userImg = null
      } 
      else 
      {
        userImg = userImg
      }

      let usuarioModificado = new User(email, password, this.usuarioLogeado.iduser, name, surname1, birthYear, username, localidad, tel, userImg)

      console.log(usuarioModificado)
      this.userService.editProfile(usuarioModificado).subscribe((respuesta: User) => {

        console.log(respuesta)
        this.message="Dato/s modificados"
        this.edit= true;
        respuesta = this.usuarioLogeado

      },
      (error) =>{

        console.log(error)

      })
  }  else 
      {
        console.log(this.usuarioLogeado.iduser)
        console.log("No se puede editar")
        
      }
  }

  ngOnInit(): void {
  }

}
