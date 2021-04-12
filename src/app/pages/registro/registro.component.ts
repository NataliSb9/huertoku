import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit 
{
  public myRegister:FormGroup;

  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }

  public register()
  {
    const user = this.myRegister.value;
    console.log(user);
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
