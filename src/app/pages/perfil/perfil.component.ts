import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  public currentUser: User= new User("","");
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params["usuario"]);
      this.currentUser = JSON.parse(params["usuario"]);
      console.log(JSON.parse(params["usuario"]));
    });

    /*

    pjbolullo@gmail.com
pjbolullo@gmail.com

    */

  }
  
  

}
