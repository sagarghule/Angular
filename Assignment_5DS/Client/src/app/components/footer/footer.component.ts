import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor() { }

  public year = this.getYear();

  getYear()
  {
    const date = new Date();
    return date.getFullYear();
  }

}
