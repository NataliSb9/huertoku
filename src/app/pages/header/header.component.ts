import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import {ListaDeseosComponent} from 'src/app/pages/lista-deseos/lista-deseos.component'
import { ProductosService } from 'src/app/shared/productos.service';
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public productosNumero:Product[]
  public usuarioId:Number;

  constructor(public dialog: MatDialog,private userService: UserService, private router: Router,private productoService:ProductosService) { 

  this.usuarioId = this.userService.user.iduser;
  console.log(this.usuarioId);
  this.productosNumero = this.productoService.productos

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
    this.router.navigate(["/","registro"]);
  }
  
  ngOnInit(): void 
  {
    this.productosNumero = this.productoService.productos
    
  }

}
// @Component({
//   selector: 'lista-deseos.component',
//   templateUrl: 'lista-deseos.component.html',
// })
// export class ListaDeseosComponent {}