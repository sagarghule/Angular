import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';
import { UploadImageService} from 'src/app/services/upload-image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  public fname : any = '';
  public lname : any = '';
  public email: any='';
  public phone : any = '';
  public address : any = '-';
  public city : any = '-';
  public image = '../../assets/profile.png';

  public editmode = false;
  public imgupload = false;
  public submitted = false;

  constructor(private _userDataService: UserdataService,
    private _formBuilder: FormBuilder,
    private _uploadImage: UploadImageService,
    private _router:Router) {
   
   }

   editProfile()
   {
    this.editmode = true;
   }

   profileForm: FormGroup = this._formBuilder.group({});

   ngOnInit() {
    this._userDataService.loggedIn()
    .subscribe(
      (user) => {
        this.fname = user["fname"]; 
        this.lname = user["lname"];
        this.email = user["email"];
        this.phone = user["phonNum"];
        this.address = typeof user["address"] !== 'undefined' ? user["address"] : this.address;
        this.city = typeof user["city"] !== 'undefined' ? user["city"] : this.city;
        this.image = typeof user["image"] !== 'undefined' ? user["image"] : this.image;
      },
      err => console.log("profile error: ",err)
    );

    this.editmode = false;
    
    // initialising the form fields
    this.profileForm = this._formBuilder.group({
      fname: [this.fname, Validators.required],
      lname: [this.lname, Validators.required],
      phonenum: [this.phone, [Validators.required,Validators.minLength(10),Validators.maxLength(10)]],
      address: this.address,
      city: this.city,
      image: this.image
    });
  }

  get f() {
    return this.profileForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }
    else{

      //upload image if it is changed 
        if(this.imgupload){
          this._uploadImage.addUserImage(this.profileForm.controls.image.value)
        .subscribe(
          (message) =>{
            alert(message.message);
            this.imgupload = false;
        },
        (error) => alert(error.error))
        }
        
        var profileDetails = {"fname": this.profileForm.controls.fname.value,
        "lname": this.profileForm.controls.lname.value,
        "email": this.email,
        "phonNum": this.profileForm.controls.phonenum.value,
        "address": this.profileForm.controls.address.value, 
        "city": this.profileForm.controls.city.value}
        
        var formData = JSON.stringify(profileDetails);
        this._userDataService.updateUserProfile(formData)
        .subscribe(
          (success) => {
            this.ngOnInit();
            alert("Profile Updated Successfully !!!");
          },
          (error) => console.log(error)
        )
    }
  }

  onCancel(){
    this.editmode = false;
  }

  onFileSelect(event:Event)
  {
    const file = (event.target as HTMLInputElement).files[0];
    const allowedFileTypes = ["image/png", "image/jpeg", "image/jpg"];

    if(file && allowedFileTypes.includes(file.type))
    {
      const reader = new FileReader();
      reader.onload = () =>{
        this.image = reader.result as string;
      }
      reader.readAsDataURL(file);
      this.profileForm.patchValue({image: file});
      this.imgupload = true;
    }
    else{
      alert("Only png, jpeg or jpg image formats are allowed.")
    }
  } 

  goToMomentPage(){
    this._router.navigate(['/Home'])
  }

}

