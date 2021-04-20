import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {ListaDeseosComponent} from 'src/app/pages/lista-deseos/lista-deseos.component'
import { UserService } from 'src/app/shared/user.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public usuarioId:Number;

  constructor(public dialog: MatDialog,private userService: UserService, private router: Router) { 

  this.usuarioId = this.userService.user.iduser;
  console.log(this.usuarioId);
  

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
    
  }

}
// @Component({
//   selector: 'lista-deseos.component',
//   templateUrl: 'lista-deseos.component.html',
// })
// export class ListaDeseosComponent {}