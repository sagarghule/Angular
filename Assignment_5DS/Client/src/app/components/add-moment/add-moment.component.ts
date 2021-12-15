import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserdataService } from 'src/app/services/userdata.service';
import { UploadImageService} from 'src/app/services/upload-image.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-moment',
  templateUrl: './add-moment.component.html',
  styleUrls: ['./add-moment.component.css']
})
export class AddMomentComponent implements OnInit {

  public title : any = '';
  public tag : any = '';
  public image = '../../assets/blank.png';
  public imgupload = false;
  public submitted = false;
  public updateId: any;
  public editmode = false;
  public momentData:any;

  constructor(private _userDataService: UserdataService,
    private _activatedroute : ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _uploadImage: UploadImageService,
    private _router:Router) {
      // initialising the form fields
    this.momentForm = this._formBuilder.group({
      title: ['', Validators.required],
      tag: ['', Validators.required],
      image: ['', Validators.required]
    });

      this._activatedroute.paramMap.subscribe(params => { 
        this.updateId = params.get('id');
    });
    if(this.updateId !== null){
      this.editmode = true
    }
   }

   momentForm: FormGroup = this._formBuilder.group({});

   ngOnInit() {
    if(this.editmode)
      {
        this.getMomentById(this.updateId);
      }
  }

  get f() {
    return this.momentForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if (this.momentForm.invalid || !this.imgupload) {
      if(!this.imgupload){
        alert("Please upload image and then submit.")
      }
      return;
    }
    else{
      if(this.editmode)
      {
        var momentDetails = {"title": this.momentForm.controls.title.value,
        "tag": this.momentForm.controls.tag.value,
        "id": this.updateId
        }
        
        var formData = JSON.stringify(momentDetails);
        this._userDataService.updateMoment(formData)
        .subscribe(
          (res) => {
            this.uploadImage(res._id);
            this.editmode = false;
          },
          (error) => console.log(error)
        )
      }
      else{
        var momentDetail = {"title": this.momentForm.controls.title.value,
        "tag": this.momentForm.controls.tag.value,
        }
        
        var formData = JSON.stringify(momentDetail);
        this._userDataService.createMoment(formData)
        .subscribe(
          (res) => {
            this.uploadImage(res._id);
          },
          (error) => console.log(error)
        )

      }
    }
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
      this.momentForm.patchValue({image: file});
      this.imgupload = true;
    }else{
      alert("Only png, jpeg or jpg image formats are allowed.")
    }
  } 

   uploadImage(id:any){
    this._uploadImage.addMomentImage(this.momentForm.controls.image.value,id)
  .subscribe(
    (message) =>{
      alert(message.message);
      alert("!!!...Moment Uploaded successfully...!!!");
      this.imgupload = false;
      this.goToMomentPage()
  },
  (error) => alert(error.error))
  }

  // To Single moment Details By ID
 getMomentById(id:any) {
  this._userDataService.getMomentById(id).subscribe(res => {
  this.momentData = res;
  this.momentForm.patchValue({
    title: this.momentData.title,
    tag: this.momentData.tag,
    image: this.momentData.image
  });
  });
  }
  goToMomentPage(){
    this._router.navigate(['/Home'])
  }
}
