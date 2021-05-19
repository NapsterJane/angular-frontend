import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = "http://localhost:8080/api/v1/employees";

  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee: Employee): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`, employee);
  }

  getEmployeeById(empId: number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${empId}`);
  }

  updateEmployee(empId: number, employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.baseUrl}/${empId}`, employee);
  }

  deleteEmployee(empId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${empId}`);
  }
}
