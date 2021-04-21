import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Chat } from 'src/app/model/chat';
import { Product } from 'src/app/model/product';
import { User } from 'src/app/model/user';
import {ListaDeseosComponent} from 'src/app/pages/lista-deseos/lista-deseos.component'
import { ChatService } from 'src/app/shared/chat.service';
import { ProductosService } from 'src/app/shared/productos.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public chatsNumero:Chat[]
  public productosNumero:Product[]
  public usuarioId:Number;

  constructor(public dialog: MatDialog,private userService: UserService, private router: Router,private productoService:ProductosService, private chatService:ChatService) { 

  this.usuarioId = this.userService.user.iduser;


  console.log(this.usuarioId);
  this.productosNumero = this.productoService.productos
  this.chatsNumero=this.chatService.chats
  }
  openDialog() {

    const dialogRef = this.dialog.open(ListaDeseosComponent);

    dialogRef.afterClosed().subscribe(result =>{
      
    console.log('Dialog result: ${result}');

   });
  }

  registroPerfil()
  {
    this.usuarioId = this.userService.user.iduser;
    if(this.usuarioId != undefined)
    {
      this.router.navigate(["/","perfil"])
    }
    else
    {
      this.router.navigate(["/","registro"])
    }
  }

  cerrarSesion()
  {
    sessionStorage.removeItem("iduser");
    
    this.userService.user = null;
    
    this.router.navigate(["/","registro"]);
  }
  
  ngOnInit(): void 
  {
    this.productosNumero = this.productoService.productos
    this.chatsNumero=this.chatService.chats
  }

}
// @Component({
//   selector: 'lista-deseos.component',
//   templateUrl: 'lista-deseos.component.html',
// })
// export class ListaDeseosComponent {}