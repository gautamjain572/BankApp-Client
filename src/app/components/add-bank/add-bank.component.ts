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
  responseMessage = ''; // To show response message

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
    if (this.bankForm.invalid) return;
  
    this.isSubmitting = true;
    this.responseMessage = '';
  
    this.bankService.addBank(this.bankForm.value).subscribe({
      next: (response) => {
        if (response.suceess) {
          this.responseMessage = response.message;
          alert(response.message); // Show success message
          this.bankForm.reset(); // Clear form after successful submission
        } else {
          this.responseMessage = 'Error: ' + response.message || "Something went wrong!";
          alert('Error: ' + response.message || "Something went wrong!"); // Show error message if success is false
        }
      },
      error: (error) => {
        this.responseMessage = 'Error: ' + error.error.message;
        alert('Error: ' + error.error.message); // Show API error message
      },
      complete: () => {
        this.isSubmitting = false;
      }
    });
  }
  

}
