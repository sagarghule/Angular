import { Component, Input, OnInit } from '@angular/core';
import { UserdataService } from 'src/app/services/userdata.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() name = '';
  constructor(private _userDataService: UserdataService) { }
  loggedIn = false;
  ngOnInit(): void {
    setTimeout(() => { 
      this.loggedIn = !!localStorage.getItem('token')
      this.ngOnInit() }, 10 * 10)
  }

  logout(){
    this.loggedIn = false;
    this._userDataService.logout();
  }
}
