import { Injectable } from '@angular/core';
import { CartItem } from './cart/cart.component';
import {J} from "@angular/cdk/keycodes";


@Injectable({
  providedIn: 'root'
})
export class BasketService {
  private readonly  CART_ITEMS_KEY= 'cartItems';
  cartItems: CartItem[] = [];

  constructor() {
    const cartItemsString = localStorage.getItem(this.CART_ITEMS_KEY);
    if (cartItemsString){
      this.cartItems = JSON.parse(cartItemsString);
    }
  }

  addToBasket(item: CartItem) {
      this.cartItems.push(item);

  }
  setCartItems(items: CartItem[]) {
    this.cartItems = items;
}

  getCratItems(): CartItem[]{
    return this.cartItems;
  }
  removeCartItem(item: CartItem) {
    this.cartItems = this.cartItems.filter((cartItem) => cartItem.clothesId !== item.clothesId);

    localStorage.setItem(this.CART_ITEMS_KEY , JSON.stringify(this.cartItems));
  }

  clearCartItems(){
    this.cartItems = [];
    localStorage.removeItem(this.CART_ITEMS_KEY);
  }


  updateOrderInformation(cartItem: CartItem, newInformation:  Partial<CartItem> ) {
  const index = this.cartItems.findIndex(item => item.clothesId === cartItem.clothesId);
    if (index !== -1) {
this.cartItems[index] = { ...this.cartItems[index], ...newInformation };
    localStorage.setItem(this.CART_ITEMS_KEY, JSON.stringify(this.cartItems)); // Update localStorage
      Object.assign(this.cartItems[index], newInformation);
    }
  }

}
