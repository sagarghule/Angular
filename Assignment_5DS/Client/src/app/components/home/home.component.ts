import { Component, OnInit } from '@angular/core';
import { UserdataService } from '../../services/userdata.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  momentList: any = [];
  constructor(private _router:Router,
    private _userDataService: UserdataService) {
    this.readMoment();
   }

  ngOnInit(): void {
  }

  readMoment(){
    this._userDataService.getMoments().subscribe((data) => {
     this.momentList = data;
    })    
  }

  removeMoment(moment:any, index:any) {
    if(window.confirm('Are you sure?')) {
        this._userDataService.deleteMoment(moment._id).subscribe((data) => {
          this.momentList.splice(index, 1);
        }
      )    
    }
  }

  goToCreateMoment(){
    this._router.navigate(['/AddMoment'])
  }
}
