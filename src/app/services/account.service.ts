import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AccountService {

  private baseUrl = 'https://localhost:7220/api/Account';

  constructor(private http: HttpClient) {}

  // API to add a new account holder
  addAccountHolder(accountData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/Add-AccountHolders-details`, accountData);
  }

  // Get all account holders
  getAllAccounts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/Get-AccountHolders-details`);
  }

  // Deposit amount to the account
  depositAmount(accountNumber: string, accountHolderName: string, depositAmount: number): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Deposit-Amount`, {
      accountNumber,
      accountHolderName,
      depositAmount
    });
  }

  // Withdraw amount from the account
  withdrawAmount(withdrawData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/Withdraw-Amount`, withdrawData);
  }

}
