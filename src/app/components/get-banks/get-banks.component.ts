import { Component, OnInit } from '@angular/core';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-get-banks',
  templateUrl: './get-banks.component.html',
  styleUrls: ['./get-banks.component.css']
})

export class GetBanksComponent implements OnInit {

  banks: any[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(private bankService: BankService) {}

  ngOnInit(): void {
    this.fetchBanks();
  }

  fetchBanks(): void {
    this.bankService.getAllBanks().subscribe({
      next: (response) => {
        this.banks = response.data; // Assuming response contains data property
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = 'Error fetching banks. Please try again.';
        this.isLoading = false;
      }
    });
  }
  
}
