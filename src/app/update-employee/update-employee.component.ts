import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  empId!: number;
  employee!: Employee;

  constructor(private employeeService: EmployeeService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.employee = new Employee();
    this.empId = this.activatedRoute.snapshot.params['empId'];

    this.employeeService.getEmployeeById(this.empId).subscribe(data => {
      console.log(data);
      this.employee = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.empId, this.employee).subscribe( data =>{
     this.gotoEmployeeList();
    },error => console.log(error));
  }

  gotoEmployeeList(){
    this.router.navigate(["employees"]);
  }

}
