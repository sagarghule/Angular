import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
    })
};

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private _http:HttpClient,
    private _router:Router) {}

  //baseUrl = "http://localhost:3400/"
  baseUrl ='/app/'

  //requests related to user data
  createUser(formData:any){
    return this._http.post<any>(`${this.baseUrl}createUser`, formData,httpOptions)
  }

  loginUser(email:any,password:any)
  {
    const loginCredentials = {email,password}
    return this._http.post<any>(`${this.baseUrl}loginUser`, loginCredentials, httpOptions)
  }

  updatePassword(formData:any)
  {
    return this._http.patch<any>(`${this.baseUrl}updatePassword`, formData,httpOptions)
  }

  updateUserProfile(formData:any){
    return this._http.put<any>(`${this.baseUrl}updateUser`, formData,httpOptions)
  }

  logout() {
    localStorage.removeItem('token');
    this._router.navigate(['/Login']);
  }

  loggedIn() {
    return this._http.get<any>(`${this.baseUrl}loggedIn`);   
  }

  mustMatch(pwd1: string, pwd2: string) {
    return (formGroup: FormGroup) => {
      const pwdControl = formGroup.controls[pwd1];
      const cnfPwdControl = formGroup.controls[pwd2];
      if (pwdControl.value !== cnfPwdControl.value) {
        cnfPwdControl.setErrors({
          mustMatch: true
        })
      } 
    }
  }

//requests related to moment data
createMoment(formData:any){
  return this._http.post<any>(`${this.baseUrl}createMoment`, formData,httpOptions).pipe(
    catchError(this.errorMgmt))
}

updateMoment(formData:any){
  return this._http.put<any>(`${this.baseUrl}updateMoment`, formData,httpOptions).pipe(
    catchError(this.errorMgmt))
}

getMoments(){
  return this._http.get<any>(`${this.baseUrl}getMoments`).pipe(
    map((res: Response) => {
      return res || {}
    }),
    catchError(this.errorMgmt)
  )
}

getMomentById(id:any){
  return this._http.get<any>(`${this.baseUrl}getMomentById/${id}`).pipe(
    catchError(this.errorMgmt));
}

deleteMoment(id:any){
 return this._http.delete<any>(`${this.baseUrl}deleteMoment/${id}`).pipe(
  catchError(this.errorMgmt));
}

// Error handling 
errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
