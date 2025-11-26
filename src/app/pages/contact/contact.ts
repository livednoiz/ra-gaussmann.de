import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { ContactMap } from './contact-map';

@Component({
  selector: 'page-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ContactMap],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class Contact {
  form: ReturnType<FormBuilder['group']>;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    console.log('Form data:', this.form.value);
    alert('Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.');
    this.form.reset();
  }
}
