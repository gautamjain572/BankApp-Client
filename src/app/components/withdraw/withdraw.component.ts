import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})

export class WithdrawComponent implements OnInit {

  withdrawForm!: FormGroup;
  isSubmitting = false;
  responseMessage = '';

  constructor(private fb: FormBuilder, private accountService: AccountService) {}

  ngOnInit(): void {
    this.withdrawForm = this.fb.group({
      atmCardNumber: ['', [Validators.required, Validators.minLength(12)]],
      cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]],
      atmPin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]],
      withdrawalAmount: ['', [Validators.required, Validators.min(100)]]
    });
  }

  onSubmit(): void {
    if (this.withdrawForm.invalid) return;
    this.isSubmitting = true;
    this.responseMessage = '';

    this.accountService.withdrawAmount(this.withdrawForm.value).subscribe(
      (response) => {
        if (response.suceess) {
          this.responseMessage = response.message;
          this.withdrawForm.reset();
        } else {
          this.responseMessage = 'Withdrawal failed. ' + response.message;
        }
      },
      (error) => {
        this.responseMessage = 'Error: ' + error.error.message;
      }
    ).add(() => this.isSubmitting = false);
  }
  
}