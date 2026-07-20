import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  contactData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  successMessage: string = '';
  errorMessage: string = '';
  submitting: boolean = false;

  contactInfo = [
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Our Store',
      lines: ['123 Fashion Street,', 'Chennai, Tamil Nadu - 600001']
    },
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      lines: ['+91 98765 43210', '+91 98765 43211']
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      lines: ['info@swastickgarments.com', 'support@swastickgarments.com']
    },
    {
      icon: 'bi-clock-fill',
      title: 'Store Hours',
      lines: ['Mon - Sat: 10:00 AM - 8:00 PM', 'Sunday: 11:00 AM - 6:00 PM']
    }
  ];

  onSubmit(): void {
    this.successMessage = '';
    this.errorMessage = '';
    this.submitting = true;

    // Simulate form submission (appuram backend connect pannalam)
    setTimeout(() => {
      this.successMessage = 'Thank you! Your message has been sent. We will get back to you within 24 hours.';
      this.resetForm();
      this.submitting = false;
    }, 1500);
  }

  resetForm(): void {
    this.contactData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }
}