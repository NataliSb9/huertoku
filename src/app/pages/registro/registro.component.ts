
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit 
{
  
  public myRegister:FormGroup;
  public mensaje:string;
  constructor(private formBuilder: FormBuilder, private userService:UserService,private router:Router) 
  { 
    this.buildForm();
  }

  public iniciarSesion()
  {

    const usuario1 = this.myRegister.value
    
     
    this.userService.logIn(usuario1).subscribe((usuarioLogeado:User[])=>{
      
    
      if (usuarioLogeado.length > 0) {

        sessionStorage.setItem("iduser",JSON.stringify(usuarioLogeado[0].iduser))
        
        this.userService.user=usuarioLogeado[0]
        this.router.navigate(['/', 'perfil'])
        console.log(this.userService.user)
      }else{
        this.mensaje="Email o contraseña incorrecta"
      }
      console.log(usuarioLogeado)
    })
  }



  private buildForm()
  {
    const minPassLength = 8;

    this.myRegister = this.formBuilder.group
    ({
      email:[,[Validators.required, Validators.email]],
      password:[,[Validators.required, Validators.minLength(minPassLength)]]
    });
  }
  
  ngOnInit(): void 
  {
  }

}
