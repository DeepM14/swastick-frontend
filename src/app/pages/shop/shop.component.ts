import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  emoji: string;
  badge?: string;
  rating: number;
  reviews: number;
}

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

  selectedCategory = 'All';

  categories = ['All', "Men's Wear", "Women's Wear", "Kids Wear", "Ethnic Wear", "Casual Wear"];

  products: Product[] = [
    { id: 1, name: 'Classic Kurta Set', category: "Men's Wear", price: 899, originalPrice: 1299, emoji: '👔', badge: 'Best Seller', rating: 5, reviews: 128 },
    { id: 2, name: 'Embroidered Saree', category: "Women's Wear", price: 2499, originalPrice: 3499, emoji: '👗', badge: 'New', rating: 5, reviews: 89 },
    { id: 3, name: 'Kids Party Dress', category: "Kids Wear", price: 599, originalPrice: 899, emoji: '👒', badge: 'Sale', rating: 4, reviews: 45 },
    { id: 4, name: 'Sherwani Set', category: "Ethnic Wear", price: 4999, originalPrice: 6999, emoji: '🥻', badge: 'Premium', rating: 5, reviews: 67 },
    { id: 5, name: 'Casual T-Shirt', category: "Casual Wear", price: 399, originalPrice: 599, emoji: '👕', rating: 4, reviews: 203 },
    { id: 6, name: 'Anarkali Suit', category: "Women's Wear", price: 1899, originalPrice: 2799, emoji: '👘', badge: 'Trending', rating: 5, reviews: 156 },
    { id: 7, name: 'Boys Ethnic Set', category: "Kids Wear", price: 799, originalPrice: 1099, emoji: '🧒', rating: 4, reviews: 34 },
    { id: 8, name: 'Formal Blazer', category: "Men's Wear", price: 2299, originalPrice: 3299, emoji: '🧥', badge: 'New', rating: 5, reviews: 91 },
    { id: 9, name: 'Lehenga Choli', category: "Ethnic Wear", price: 3499, originalPrice: 4999, emoji: '💃', badge: 'Premium', rating: 5, reviews: 112 },
    { id: 10, name: 'Denim Jeans', category: "Casual Wear", price: 899, originalPrice: 1299, emoji: '👖', rating: 4, reviews: 178 },
    { id: 11, name: 'Designer Kurti', category: "Women's Wear", price: 999, originalPrice: 1499, emoji: '🌸', badge: 'Sale', rating: 4, reviews: 76 },
    { id: 12, name: 'Pathani Suit', category: "Men's Wear", price: 1599, originalPrice: 2199, emoji: '🧣', rating: 5, reviews: 54 }
  ];

  get filteredProducts(): Product[] {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(p => p.category === this.selectedCategory);
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getDiscount(price: number, originalPrice: number): number {
    return Math.round(((originalPrice - price) / originalPrice) * 100);
  }

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}