import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private http : HttpClient,
     private router: Router,
      private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    });

  }
  Login(){
    let formValues=this.loginForm.value;
    this.loginservice.loginUser(formValues)
    .subscribe((res: any[])=>{
      const user= res.find((a:any)=>{
        return a.email===this.loginForm.value.email && a.password===this.loginForm.value.password
      });
      if(user){
        alert("Login Successful!!");
        this.router.navigate(['/home'])
        this.loginForm.reset();       
      }else {
        alert("User not found!!");
      }(err: any)=>{
        alert("Something is wrong!!");
      }
    })
    }
}



