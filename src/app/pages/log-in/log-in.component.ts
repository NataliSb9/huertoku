import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit 
{
  public myLog:FormGroup;

  constructor(private formBuilder: FormBuilder) 
  { 
    this.buildForm();
  }

  public register()
  {
    const user = this.myLog.value;
    console.log(user);
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
///////////////////////////////////////////////////////////////////////////////////////////////

  // public isLinear = false;
  // public firstFormGroup = FormGroup;
  // public secondFormGroup = FormGroup;
  // public thirdFormGroup = FormGroup;
  // public fourthFormGroup = FormGroup;
  // public fifthFormGroup = FormGroup;
  // public sixthFormGroup = FormGroup;
  // public seventhFormGroup = FormGroup;
  // public eighthFormGroup = FormGroup;
  // public ninethFormGroup = FormGroup;
  // public tenthFormGroup = FormGroup

  // constructor(public formBuilder: FormBuilder) {}

  ngOnInit() 
  {

    // const minPassLength = 8;

    // this.firstFormGroup = this.formBuilder.group
    // ({
    //   firstCtrl: ['', Validators.required]
    // });
    //   secon: [,Validators.required],
    //   surname2: [,Validators.required],
    //   fechanacimiento: [,Validators.required],
    //   username: [,Validators.required],
    //   localidad: [,Validators.required],
    //   codigopostal: [,Validators.required],
    //   email:[,Validators.required, Validators.email],
    //   password:[,Validators.required, Validators.minLength(minPassLength)],
    //   repeatPassword: [,Validators.required]
    // });
    
  }

}
