import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  categories = [
    { name: "Men's Wear", icon: 'bi-person', description: 'Classic & Modern styles', count: '120+ Items' },
    { name: "Women's Wear", icon: 'bi-person-dress', description: 'Elegant & Trendy', count: '200+ Items' },
    { name: 'Kids Wear', icon: 'bi-stars', description: 'Cute & Comfortable', count: '80+ Items' },
    { name: 'Ethnic Wear', icon: 'bi-gem', description: 'Traditional & Festive', count: '150+ Items' }
  ];

  features = [
    { icon: 'bi-truck', title: 'Free Delivery', desc: 'On orders above ₹999' },
    { icon: 'bi-arrow-repeat', title: 'Easy Returns', desc: '7 days return policy' },
    { icon: 'bi-shield-check', title: 'Quality Assured', desc: '100% genuine products' },
    { icon: 'bi-headset', title: '24/7 Support', desc: 'Always here to help' }
  ];

  testimonials = [
    { name: 'Priya S.', location: 'Chennai', review: 'Amazing quality! The fabric feels premium and the stitching is perfect. Highly recommend Swastick Garments!', rating: 5 },
    { name: 'Rahul M.', location: 'Mumbai', review: 'Great collection and super fast delivery. The ethnic wear section is outstanding. Will definitely shop again!', rating: 5 },
    { name: 'Anitha K.', location: 'Bangalore', review: 'Best clothing store! Love their women\'s collection. Prices are very reasonable for the quality they offer.', rating: 5 }
  ];
}