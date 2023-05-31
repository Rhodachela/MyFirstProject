import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../shared/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public registerForm!: FormGroup;
  sharedService: any;
  loginservice: any;
  error: any

  constructor(private formBuilder : FormBuilder,
    private registrationService: RegistrationService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      FirstName: [''],
      MiddleName: [''],
      LastName: [''],
      EmailAddress: [''],
      PhoneNo: [''],
      DateOfBirth: [''],
      Password: ['']

    }); 
  }
  onSubmit() {
    let formValues = this.registerForm.value;
    this.registrationService.registrationUser(formValues)
   .subscribe({
      next :(res) =>{
        if(res.responseCode){
          alert("Registration Successful!!");
         }else{
          alert("Connection Error!");
        }
    },
    error: error =>{
      this.error = error.error.responseDescription ?? "Try again later";
    }
    });
  }
  // onSubmit(){
  //   let formValues=this.registerForm.value;
  //   this.registrationService.registrationUser(formValues).subscribe(
  //     (_res: any)=>{alert("Registration Successiful");
  //       this.registerForm.reset();
  //       // this.router.navigate(['login']);
  //     } ,(_err: any)=>{
  //       console.log(_err)
  //       alert ("Something went wrong!!");
  //     }
  //   )
 
  // }
  
}
  
