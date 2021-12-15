import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserdataService } from '../../services/userdata.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles : [`.btn-dark{
    background-color: rgb(3, 26, 48);
  }
  input{width: 200%;}
  .alert{
    margin-top:2%
  }`]
})
export class LoginComponent implements OnInit {
  submitted = false;
  public email:any = '';
  public password:any = '';
  
  constructor(private _router:Router,
    private _userDataService: UserdataService,
    private _formBuilder: FormBuilder) { }

  loginForm: FormGroup = this._formBuilder.group({});

  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
get f() {
  return this.loginForm.controls;
}

onSubmit()
{
  this.submitted = true;
  if (this.loginForm.invalid) {
    return;
  }
  else{
    this._userDataService.loginUser(this.loginForm.controls.email.value,this.loginForm.controls.password.value)
  .subscribe(
    res => {
      localStorage.setItem('token', res.token)
      this._router.navigate(['/Home'])
    },
    err => {
      alert(err.error['error']);
    }
  )
  }
  
}

register()
{
  this._router.navigate(['/Register']);
}

forgotPassword()
{
  this._router.navigate(['/ResetPassword']);
}

}
