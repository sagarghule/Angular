import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  submitted = false;

  constructor(private _formBuilder: FormBuilder,
    private _router:Router,
    private _userDataService: UserdataService) { }
    resetForm: FormGroup = this._formBuilder.group({});
  ngOnInit(): void {
    this.resetForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: this._userDataService.mustMatch('password', 'confirmPassword')
    });
  }

  get f() {
    return this.resetForm.controls;
  }

  onSubmit()
  {
    this.submitted = true;
    if (this.resetForm.invalid) {
      return;
    }
    else{
      var userDetails = {
        "email": this.resetForm.controls.email.value,
        "password": this.resetForm.controls.password.value 
      }
        
        var formData = JSON.stringify(userDetails);
        this._userDataService.updatePassword(formData)
        .subscribe(
          (response) => {
            alert("Password updated successfully!!!");
            this._router.navigate(['/Login']);
          },
          (error) => alert("Failed to update password. Please try again!!!")
        )
    }
  }

  goBack()
  {
    this._router.navigate(['/Login']);
  }

}
