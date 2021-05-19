import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees!: Employee[];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      console.log(data);
      this.employees = data;
    });
  }

  updateEmployee(empId: number){
    this.router.navigate(['update-component', empId]);
  }

  deleteEmployee(empId: number){
    this.employeeService.deleteEmployee(empId).subscribe( data => {
      this.getEmployees();
    });
  }

  viewEmployee(empId: number){
    this.router.navigate(['employee-details', empId]);
  }

}
