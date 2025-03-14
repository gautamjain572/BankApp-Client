import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BankService {
  
  private baseUrl = 'https://localhost:7220/api/bank'; // Base API URL

  constructor(private http: HttpClient) {}

  addBank(bankData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Add-Bank-details`, bankData);
  }

  getAllBanks(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Get-Bank-details`);
  }
  
}