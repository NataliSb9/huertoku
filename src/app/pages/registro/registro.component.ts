import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
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
  public currentUser:User;
  constructor(private formBuilder: FormBuilder, private userService:UserService,private router: Router) 
  { 
    this.buildForm();
  }

  public logIn()
  {
    const user = this.myRegister.value;
    let _this = this;

    this.userService.logIn(user.email,user.password).subscribe(
      (res: HttpResponse<User>) => {
          //_this.currentUser=res.body;
          _this.gotoPerfil(res.body);
      },
      (res: HttpErrorResponse) => {
          console.log(res.message);
      }
  );
  }

  private gotoPerfil(user: User){
    console.log(user);
    let navigationExtras: NavigationExtras={
      queryParams:{
        "usuario": JSON.stringify(user),
      }
    };
    this.router.navigate(['perfil'], navigationExtras);
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
