import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BankService } from '../../services/bank.service';

@Component({
  selector: 'app-add-bank',
  templateUrl: './add-bank.component.html',
  styleUrls: ['./add-bank.component.css']
})
export class AddBankComponent implements OnInit {
  bankForm: FormGroup;
  isSubmitting = false; // To disable button while submitting

  constructor(private fb: FormBuilder, private bankService: BankService) {
    this.bankForm = this.fb.group({
      bankName: ['', [Validators.required, Validators.minLength(3)]],
      isfcCode: ['', [Validators.required, Validators.pattern('[A-Z]{4}0[A-Z0-9]{6}')]], 
      branch: ['', Validators.required],
      bankAddress: ['', Validators.required],
      city: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.bankForm.invalid) {
      return;
    }
    
    this.isSubmitting = true;
    this.bankService.addBank(this.bankForm.value).subscribe({
      next: (response) => {
        alert('Bank added successfully!');
        this.bankForm.reset(); // Clear form after submission
      },
      error: (error) => {
        alert('Error adding bank. Please try again.');
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
}
