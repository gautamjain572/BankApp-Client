import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {
  depositForm: FormGroup;
  isSubmitting = false;
  responseMessage: string = ''; // Message from API
  isSuccess: boolean | null = null; // Track success or failure

  constructor(private fb: FormBuilder, private accountService: AccountService) {
    this.depositForm = this.fb.group({
      accountNumber: ['', [Validators.required]],
      accountHolderName: ['', [Validators.required]],
      depositAmount: ['', [Validators.required, Validators.min(100)]], // Minimum deposit 100
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.depositForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.responseMessage = ''; // Reset message
    this.isSuccess = null;

    const { accountNumber, accountHolderName, depositAmount } = this.depositForm.value;
    //console.log('Submitting Deposit:', { accountNumber, accountHolderName, depositAmount });

    this.accountService.depositAmount(accountNumber, accountHolderName, depositAmount).subscribe(
      (response: any) => {
        //console.log('Deposit API Response:', response.message); // Debugging log
        //console.log('Deposit API Response:', response); // Debugging log

        if (response.suceess) {
          this.isSuccess = true;
          this.responseMessage = response.message; // Show API message
          this.depositForm.reset();
        } else {
          this.isSuccess = false;
          this.responseMessage = response.message || 'Failed to deposit amount. Please try again!';
        }
      },
      (error) => {
        console.error('Deposit API Error:', error);
        this.isSuccess = false;
        this.responseMessage = 'An error occurred. Please try again!';
      },
      () => {
        this.isSubmitting = false;
      }
    );
  }
}
