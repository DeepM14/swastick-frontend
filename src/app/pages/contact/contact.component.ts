import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  
  private SERVICE_ID = 'service_nsfbczg';
  private TEMPLATE_ID = 'template_0opj23c';
  private PUBLIC_KEY = 'EEr3FNfyA7Jao-VAI';

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

    // EmailJS template parameters
    const templateParams = {
      from_name: this.contactData.name,
      from_email: this.contactData.email,
      phone: this.contactData.phone || 'Not provided',
      subject: this.contactData.subject,
      message: this.contactData.message
    };

    emailjs.send(
      this.SERVICE_ID,
      this.TEMPLATE_ID,
      templateParams,
      this.PUBLIC_KEY
    ).then(() => {
      this.successMessage = '✅ Message sent successfully! We will get back to you within 24 hours.';
      this.resetForm();
      this.submitting = false;
    }).catch((error) => {
      console.error('EmailJS error:', error);
      this.errorMessage = '❌ Failed to send message. Please try again or call us directly.';
      this.submitting = false;
    });
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