import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ListaDeseosComponent} from 'src/app/pages/lista-deseos/lista-deseos.component'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog() {
   const dialogRef = this.dialog.open(ListaDeseosComponent);

   dialogRef.afterClosed().subscribe(result =>{
     console.log('Dialog result: ${result}');
   });
  }
  ngOnInit(): void {
  }

}
// @Component({
//   selector: 'lista-deseos.component',
//   templateUrl: 'lista-deseos.component.html',
// })
// export class ListaDeseosComponent {}