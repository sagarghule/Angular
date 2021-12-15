import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    })
};

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private _http:HttpClient) { }

  addUserImage(file: File){
    const imageData = new FormData();
    imageData.append("image", file);
    return this._http.put<any>(`/app/updateUserImage`, imageData,httpOptions)
  }

  addMomentImage(file: File, id:any){
    const imageData = new FormData();
    imageData.append("image", file);
    return this._http.put<any>(`/app/updateMomentImage/${id}`, imageData,httpOptions)
  }
}
