import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../pages/shop/shop.component';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: CartItem[] = [];
  private cartSubject = new BehaviorSubject<CartItem[]>([]);

  cartItems$ = this.cartSubject.asObservable();

  constructor() {
    this.loadFromStorage();
  }

  private loadFromStorage(): void {
    const saved = localStorage.getItem('swastick_cart');
    if (saved) {
      this.cartItems = JSON.parse(saved);
      this.cartSubject.next(this.cartItems);
    }
  }

  private saveToStorage(): void {
    localStorage.setItem('swastick_cart', JSON.stringify(this.cartItems));
    this.cartSubject.next(this.cartItems);
  }

  addToCart(product: Product): void {
    const existing = this.cartItems.find(item => item.product.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
    this.saveToStorage();
  }

  removeFromCart(productId: number): void {
    this.cartItems = this.cartItems.filter(item => item.product.id !== productId);
    this.saveToStorage();
  }

  updateQuantity(productId: number, quantity: number): void {
    const item = this.cartItems.find(i => i.product.id === productId);
    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId);
      } else {
        item.quantity = quantity;
        this.saveToStorage();
      }
    }
  }

  getCartCount(): number {
    return this.cartItems.reduce((total, item) => total + item.quantity, 0);
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveToStorage();
  }

  getItems(): CartItem[] {
    return this.cartItems;
  }
}