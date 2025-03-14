import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-get-accounts',
  templateUrl: './get-accounts.component.html',
  styleUrls: ['./get-accounts.component.css']
})

export class GetAccountsComponent implements OnInit {

  accounts: any[] = [];
  banks: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private accountService: AccountService, private bankService: BankService) {}

  ngOnInit(): void {
    this.fetchBanks();
    this.fetchAccounts();
  }

  fetchBanks(): void {
    this.bankService.getAllBanks().subscribe(
      (response: { suceess: any; data: any[]; message: any; }) => {
        if (response.suceess) {
          this.banks = response.data;
        } else {
          console.error('Bank API Error:', response.message);
        }
      },
      (error: any) => console.error('Bank API Error:', error)
    );
  }

  fetchAccounts(): void {
    this.accountService.getAllAccounts().subscribe(
      (response) => {
        if (response.suceess) {
          this.accounts = response.data;
        } else {
          console.error('Account API Error:', response.message);
        }
        this.isLoading = false;
      },
      (error) => {
        this.errorMessage = 'Error fetching banks. Please try again.';
        console.error('API Error:', error);
        this.isLoading = false;
      }
    );
  }

  getBankName(bankID: number): string {
    const bank = this.banks.find(b => b.bankID === bankID);
    return bank ? bank.bankName : 'Unknown Bank';
  }

}
