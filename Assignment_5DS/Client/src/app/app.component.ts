import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserdataService } from './services/userdata.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  public user = "";
  constructor(private _router:Router,
    private _userDataService: UserdataService)
  {
    this._userDataService.loggedIn()
    .subscribe(
      (user) => {
        this.user = user["fname"];
      },
      err => this._router.navigate(['/Login'])
    );
  }

  ngOnInit(): void 
  {
  }
 
}
