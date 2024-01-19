import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { BasketService } from '../basket.service';

interface Clothes {
  size: any;
  clothesId: number,
  image: string;
  price: number;
  name:string;
  description: string;
  brand: string;
  stars: number;
  category: string;
  manufacture_date: Date;
}

interface ReservedItem {
  rating?: number;
  size?: any;
  clothesId?: number,
  image?: string;
  price?: number;
  name?:string;
  description?: string;
  brand?: string;
  stars?: number;
  category?: string;
  manufacture_date?: Date;
}

export interface CartItem {
  clothesId: number,
  image: string;
  price: number;
  name:string;
  brand: string;
  category: string;
  manufacture_date: Date;
  rating: number;
  status?: string;
  subtotal: number;
  quantity: number;
  size: string;
}


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  [x: string]: any;
  clothe: Clothes | undefined;
  cartItems: CartItem[] = [];
  quantity = 1;
  editMode = false;
  selectedCartItem: CartItem | null = null;

  constructor(private router: ActivatedRoute, private basketService: BasketService) {

  }

  ngOnInit() {
    this.router.paramMap.subscribe(params => {

      const cartItems = history.state.cartItems;
      if (cartItems) {
        this.cartItems = cartItems;
      } else {
        const cartItemsString = localStorage.getItem('cartItems');
        if (cartItemsString) {
          this.cartItems = JSON.parse(cartItemsString);
        }
      }
      this.cartItems = this.basketService.getCratItems();

    });


  /*  this.router.paramMap.subscribe(params => {

      const cartItems = history.state.cartItems;
      if (cartItems) {
        this.cartItems = cartItems;
      } else {
        const cartItemsString = localStorage.getItem('cartItems');
        if (cartItemsString) {
          this.cartItems = JSON.parse(cartItemsString);
        }
      }

      const reservedItemsString = localStorage.getItem('reservedItems');
      if (reservedItemsString) {
        this['reservedItems'] = JSON.parse(reservedItemsString);
      } else {
        this['reservedItems'] = [];
      }
    });
 */
  }


  reserveItems() {
    const reservedItems: ReservedItem[] = [];
    this.cartItems.forEach(item => {
      const reservedItem: ReservedItem = {
        clothesId: item.clothesId,
        name: item.name,
        brand: item.brand,
        manufacture_date: item.manufacture_date,
        price: item.price,
        rating: 0,
        category: item.category
      };
    reservedItems.push(reservedItem);

    });
   this['reservedItems'] = reservedItems;

    localStorage.setItem('reservedItems', JSON.stringify(reservedItems));

  }



  increaseQuantity(cartItem: CartItem) {
    cartItem.quantity++;

  }

  decreaseQuantity(cartItem: CartItem) {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
    } else {
      alert("Quantity cannot be negative.");
    }
  }

    removeFromCart(cartItem: CartItem){
      if (this.editMode && (cartItem.status === 'In progress' || cartItem.status === 'Cancelled')) {
        this.basketService.removeCartItem(cartItem);
        this.cartItems = this.basketService.getCratItems();
      } else {
        alert("Cannot remove this item.");
      }
     /* if (cartItem.status === 'Arrived'){
        alert("Cannot  remove an order that has already arrived");
        return;
      }*/
      //this.cartItems = this.cartItems.filter(item => item !== cartItem);


    }
  editCartItem(cartItem: CartItem){
    if ( cartItem.status === "Cancelled"  || cartItem.status === "In progress") {
      this.editMode = true;
      this.selectedCartItem = cartItem;
    }else {
      alert("Cannot edit an order that is not cancelled or in progress.");
    }
  }
  saveCartItem() {
    const index = this.cartItems.findIndex(item => item === this['cartItem']);
    if (index === -1) {

    } else {
      this.cartItems[index].quantity = this.quantity;
      this.cartItems[index].status = this['condition'] ? 'Arrived' : 'In progress';
    }
    this['cartItem'] = {} as CartItem;
    this.quantity = 1;
  }
  rateBook(cartItem: CartItem, stars: number) {
    if (cartItem.status === 'Arrived') {
      cartItem.rating = stars;
      // Save the updated rating in local storage or send it to the server
      // You can use the UserService to update the rating in the user's account
      // Example: this.userService.updateUserRating(cartItem.bookId, rating);
    } else {
      alert('You can only rate books that have arrived.');
    }
  }

  /*
  saveCartItem(){
    if (this['cartItem'].status === 'Arrived') {
      alert("Cannot change arrived orders in the basket");
      return;
    }
    const  index = this.cartItems.findIndex(item => item === this['cartItem']);
    this['cartItem'] = {} as CartItem;
    this.quantity = 1;
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    localStorage.setItem('reservedItems', JSON.stringify(this['reservedItems']));
    }
    saveCartItem() {
    const newInformation = {
      quantity: this.quantity,
      // Update other properties if needed
    };
    this.basketService.updateOrderInformation(this['cartItem'], newInformation);
    // Other code to reset variables, update localStorage, etc.
  }
   */

  cancelEdit(){
    this['cartItem'] = {} as CartItem;
    this.quantity = 1;
  }

  getTotal() {
    return this.cartItems.reduce((total, item) => {
      if (item.status !== 'Cancelled' && item.status !== 'Arrived' ) {
        return total + item.quantity * item.price;
      }
      return total;
    }, 0);
  }
  checkout() {
    const cartItemsCount = this.cartItems.filter(item => item.status === 'Cancelled' || item.status === 'In progress').length;

    if (cartItemsCount === 0) {
      alert('Your cart is empty!');
      return;
    }

    if (confirm(`Total ${this.getTotal()}. Confirm`)) {
      this.cartItems.forEach(item => {
        if (item.status === 'In progress') {
          item.status = 'Arrived';
        }
      });

      alert('Thank you for your purchase!');
    }
  }

}
