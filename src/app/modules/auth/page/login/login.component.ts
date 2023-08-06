import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public formLogin:FormGroup = new FormGroup({})
  public errorSession:boolean =false

  constructor(
    private _authService: AuthService,
    private _cookieService: CookieService,
    private _router: Router
  ){}

  ngOnInit(): void {
    this.validations()
    
  }

  private validations(){
    this.formLogin = new FormGroup(
      {
        email: new FormControl('',[Validators.required, Validators.email]),
        password:new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(12)])
      }
    )
  }

  public sendLogin():void{
    const {email, password} = this.formLogin.value
    this._authService.sendCredentials(email,password)
    .subscribe(responseOk =>{ //cuando las credecniales son correctas
      console.log("Sesion inciada correctamente",responseOk)
      const {access_token, user} = responseOk
      this._cookieService.set('token',access_token,4,'/')
      this._router.navigate(['/','articles'])
    },
    error =>{// errores  de 400 >=
      this.errorSession=true
      console.log("Ocurrido error con tu email o password")
    })
  }

}
