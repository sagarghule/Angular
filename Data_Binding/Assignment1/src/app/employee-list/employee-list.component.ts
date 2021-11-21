import { Component, OnInit } from '@angular/core';
import { Employee} from '../employee';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employee = new Employee('','','','','','','');
  public employeeID : any;
  public firstName : any;
  public lastName : any;
  public salary : any;
  public dob : any;
  public email : any;
 
  public showEdit : boolean = false;

  EditEmp()
  {
    
    this.showEdit = false;
  }

  Update()
  {
    this.employee.employeeID = this.employeeID;
    this.employee.firstName = this.firstName;
    this.employee.lastName = this.lastName;
    this.employee.salary = this.salary;
    this.employee.dob = this.dob;
    this.employee.email = this.email;
    this.showEdit = true;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
