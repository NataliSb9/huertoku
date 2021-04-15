import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/shared/user.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit 
{
  public myLog:FormGroup;
  
  constructor(private formBuilder: FormBuilder, private userService: UserService) 
  { 
    this.buildForm();
    
  }

  public register()
  {
    
    const user = this.myLog.value;
    this.userService.register(user).subscribe((data)=>{
      console.log(data)
    })
    
  }

  private buildForm()
  {
    const minPassLength = 8;

    this.myLog = this.formBuilder.group
    ({
      // name: [, Validators.required],
      // surname1: [,Validators.required],
      // surname2: [,Validators.required],
      // birthYear: [,Validators.required],
      // username: [,Validators.required],
      // localidad: [,Validators.required],
      // cp: [,Validators.required],
      email:[,[Validators.required, Validators.email]],
      password:[,[Validators.required, Validators.minLength(minPassLength)]],
      repeatPassword: [,[Validators.required, Validators.minLength(minPassLength)]]
    });
  }



  ngOnInit() 
  {
    
  }

}
