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

  saveChanges(email:string, password:string, name:string, surname1:string, birthYear:number, username:string, localidad:string, tel:number, userImg:string){
    console.log(this.usuarioLogeado)
    this.userService.editProfile(new User(email,password,this.usuarioLogeado.iduser,name,surname1,birthYear,username,localidad,tel,userImg)).subscribe((data:any)=>{
        
        this.usuarioLogeado=data
        this.message="Dato/s modificados"
        console.log(data);
        
      // this.usuarioLogeado=data
    })
  }
  // editarDisco( name:string, surname1:string, birthYear:number, username:string, localidad:string, tel:number, email:string ,userImg:string) 
  // {
  //   if (iduser !== undefined) 
  // {
  //     if (name === "") 
  //     {
  //       name = null
  //     } 
  //     else 
  //     {
  //       name = name
  //     }

  //     if (surname1 === "") 
  //     {
  //       surname1 = null
  //     } 
  //     else 
  //     {
  //       surname1 = surname1
  //     }

  //     if (birthYear === "") 
  //     {
  //       birthYear = null
  //     } 
  //     else 
  //     {
  //       birthYear = birthYear
  //     }   

  //     if (username === "") 
  //     {
  //       username = null
  //     } 
  //     else 
  //     {
  //       username = username
  //     }

  //     if (localidad === undefined) 
  //     {
  //       localidad = null
  //     } 
  //     else 
  //     {
  //       localidad = localidad
  //     } 

  //     if (tel === null) 
  //     {
  //       tel = null
  //     } 
  //     else 
  //     {
  //       tel = tel
  //     } 

  //     if (email === undefined) 
  //     {
  //       email = null
  //     } 
  //     else 
  //     {
  //       email = email
  //     }

  //     if (userImg === undefined) 
  //     {
  //       userImg = null
  //     } 
  //     else 
  //     {
  //       userImg = userImg
  //     }
  //     let discoNew = new User()

  //     console.log(discoNew)
  //     this.userService.editProfile(discoNew).subscribe((respuesta: User) => {
  //       console.log(respuesta)
  //       this.edit= true;
  //     },(error) =>{
  //       console.log(error.error)
  //       this.error = error.error
  //     })
  //   } else {
  //     console.log("No se puede editar")
  //     this.edit = false
  //   }
  // }

  ngOnInit(): void {
  }

}
