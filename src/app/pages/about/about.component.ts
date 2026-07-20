import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  stats = [
    { number: '15+', label: 'Years Experience' },
    { number: '500+', label: 'Products' },
    { number: '10K+', label: 'Happy Customers' },
    { number: '50+', label: 'Brands' }
  ];

  values = [
    { icon: 'bi-gem', title: 'Premium Quality', desc: 'Every piece is carefully crafted using the finest fabrics and materials.' },
    { icon: 'bi-heart-fill', title: 'Customer First', desc: 'Your satisfaction is our priority — we go above and beyond for every customer.' },
    { icon: 'bi-award-fill', title: 'Trusted Brand', desc: 'Over 15 years of excellence in fashion retail across Tamil Nadu.' },
    { icon: 'bi-palette-fill', title: 'Unique Designs', desc: 'Our designers create exclusive collections that blend tradition with modernity.' }
  ];

  team = [
    { name: 'Rajesh Kumar', role: 'Founder & CEO', emoji: '👨‍💼' },
    { name: 'Priya Sharma', role: 'Head Designer', emoji: '👩‍🎨' },
    { name: 'Vikram Patel', role: 'Operations Manager', emoji: '👨‍💻' }
  ];
}