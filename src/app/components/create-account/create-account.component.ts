import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  accountForm!: FormGroup;
  banks: any[] = [];
  isSubmitting = false; // To disable button while submitting
  responseMessage = ''; // To show response message
  alertClass = ''; // To set alert class

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private bankService: BankService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadBanks();
  }

  initializeForm(): void {
    this.accountForm = this.fb.group({
      accountHolderName: ['', Validators.required],
      gender: ['', Validators.required],
      bankID: ['', Validators.required], // Dropdown selection
      balance: [2000, [Validators.required, Validators.min(2000)]], // Min ₹2000
      panCard: ['', Validators.required],
      aadharCard: ['', Validators.required],
      atmCardNumber: ['', Validators.required],
      cvv: ['', Validators.required],
      atmPin: [''], // Optional (No validation)
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      createdDate: [new Date().toISOString().split('T')[0], Validators.required], // Default today
    });
  }

  loadBanks(): void {
    this.bankService.getAllBanks().subscribe({
      next: (response) => {
        this.banks = response.data; // Assuming response contains data property
      },
      error: (error) => {
        console.error('Error fetching banks', error);
      }
    });
  }

  onSubmit() {
    if (this.accountForm.invalid) return;
  
    this.isSubmitting = true; // Start loading
    this.responseMessage = ''; // Reset message
  
    const formData = this.accountForm.value;
  
    this.accountService.addAccountHolder(formData).subscribe({
      next: (response: any) => {
        //console.log("API Response: ", response);
  
        if (response.suceess) {
          this.responseMessage = response.message; // Set message from API
          this.alertClass = 'alert-success'; // Set success style
          this.accountForm.reset();
        } else {
          this.responseMessage = response.message || "Something went wrong!";
          this.alertClass = 'alert-danger'; // Set error style
        }
  
        this.isSubmitting = false;
      },
      error: (error) => {
        console.error("API Error: ", error);
        this.responseMessage = 'Error creating account. Please try again.';
        this.alertClass = 'alert-danger';
        this.isSubmitting = false;
      }
    });
  }
  
  
  
}
