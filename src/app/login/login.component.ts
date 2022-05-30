import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private loginservice: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      email: [],
      password: []
    });

  }
  login(){
    
  }

}
