import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formLogin:FormGroup = new FormGroup({})

  constructor(){}

  ngOnInit(): void {
    this.sendLogin()
    
  }

  public sendLogin(){
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
      }
    )
  }

}
