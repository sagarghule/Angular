import { Component, OnInit } from '@angular/core';
import { Details} from '../../models/details';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserdataService } from '../../services/userdata.service'

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styles : [`.btn-dark{
    background-color: rgb(3, 26, 48);
  }
  input{width: 120%;}`]
})
export class RegisterformComponent implements OnInit {

  submitted = false;

  constructor(private _formBuilder: FormBuilder,
    private _router:Router,
    private _userDataService: UserdataService) 
  {

  }

  registerForm: FormGroup = this._formBuilder.group({});

  ngOnInit() {
    // initialising the form fields
    this.registerForm = this._formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      phonenum: ['', [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this._userDataService.mustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  

  onSubmit() 
  {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else{
      
      var userDetails = new Details(this.registerForm.controls.fname.value,
        this.registerForm.controls.lname.value,
        this.registerForm.controls.email.value,
        this.registerForm.controls.phonenum.value,
        this.registerForm.controls.password.value); 

        var formData = JSON.stringify(userDetails);
        this._userDataService.createUser(formData)
        .subscribe(
          (response) => {
            alert("Sign Up Successfully !!!");
            this._router.navigate(['/Login']);
          },
          (error) => alert("Failed to Sign Up. Please try again!!!")
        )
    }
  }
  
  login()
  {
    this._router.navigate(['/Login']);
  }
  
}
