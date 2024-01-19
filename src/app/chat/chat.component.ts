import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ChatbotService } from '../chat.service';
import { DomSanitizer } from '@angular/platform-browser';
import { BasketService } from '../basket.service';
import {Router, Routes} from '@angular/router';
import { CartItem } from '../cart/cart.component';
import {BookDetailsComponent} from "../book-details/book-details.component";
const routes: Routes = [
  { path: 'book-details/:id', component: BookDetailsComponent },

];
interface Jacket {
  clothesId: number;
  image: string;
  price: number;
  name: string;
  brand: string;
  category: string;
  manufacture_date: Date; // Use string or Date depending on what the service returns
  rating: number;
  stars?: number; // Optional if not always present
  description?: string; // Optional if not always present
  size?: string[]; // Optional if not always present
  status?: string; // Optional if not always present
}


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages: { user: string; text: string; custom?: any }[] = [];
  userMessage = '';
  chatOpened = false;
  lastShownJackets: Jacket[] = [];

  constructor(
    private chatbotService: ChatbotService,
    private changeDetector: ChangeDetectorRef,
    private basketService: BasketService,
    private sanitizer: DomSanitizer,
    private router: Router
  ) {}

  ngOnInit(): void {

  this.loadJackets();
  }
loadJackets(): void{

}
  toggleChat(): void {
      console.log('toggleChat called');
    this.chatOpened = !this.chatOpened;
    this.changeDetector.detectChanges();
}

testButtonClick(): void {
console.log('Test button clicked!');
}

getImagePath(imagePath: string): any {
return this.sanitizer.bypassSecurityTrustUrl(imagePath);
}

sendMessage(): void {
const message = this.userMessage.trim();
if (message === '') {
return;
}

this.messages.push({ user: 'You', text: message });
this.userMessage = '';

this.chatbotService.sendMessage(message).subscribe((response: any) => {
    console.log('Response from chatbot service:', response);
    this.processResponse(response);
}, error => {
  console.error('Error from chatbot service:', error);
});
}

handleButton(payload: { intent: string, id: number }): void {
if (payload.intent === 'view_details') {
this.router.navigate(['localhost:4200/book-details', payload.id]);
} else if (payload.intent === 'add_to_basket') {
this.addToBasket(payload.id);
}
}
private processResponse(response: any): void {
    console.log('Response from chatbot service:', response);

    // Iterate over the response array
    response.forEach((messagePart: any) => {
        // Add text messages to the messages array
        if (messagePart.text) {
            this.messages.push({user: 'Bot', text: messagePart.text});
        }

        // Check if the custom property exists and if it contains jackets
        if (messagePart.custom && messagePart.custom.jackets) {
            // Map the jackets to the Jacket interface
            this.lastShownJackets = messagePart.custom.jackets.map((jacket: any) => {
                // Transform the jacket object to match the Jacket interface
                return {
                    clothesId: jacket.clothesId,
                    image: jacket.image,
                    price: jacket.price,
                    name: jacket.name,
                    brand: jacket.brand,
                    category: jacket.category,
                    manufacture_date: new Date(jacket.manufacture_date),
                    rating: jacket.rating,
                    stars: jacket.stars,
                    description: jacket.description,
                    size: jacket.size ? jacket.size.split(', ') : [], // Splitting sizes if they're a string
                    status: jacket.status,
                };
            });

            // Trigger change detection to update the view
            this.changeDetector.detectChanges();
            this.changeDetector.markForCheck();
            console.log('Updated lastShownJackets:', this.lastShownJackets);
        }
    });
}

formatMessage(message: any): any {
if (message.user === 'Bot' && message.text) {
return this.sanitizer.bypassSecurityTrustHtml(this.stylizeMessageText(message.text));
}
return message.text;
}

private stylizeMessageText(text: string): string {
    return text.replace(/\*(.*?)\*/g, '<strong>$1</strong>');
}

viewJacketDetails(clothesId: number,): void {
this.router.navigate(['/book-details', clothesId]);

}

addToBasket(clothesId: number): void {
const jacketDetails = this.lastShownJackets.find(jacket => jacket.clothesId === clothesId);
if (jacketDetails) {
const item: CartItem = {
        size: jacketDetails.size ? jacketDetails.size.join(', ') : 'Default size', // Join the array into a string or default value
        clothesId: jacketDetails.clothesId,
        image: jacketDetails.image,
        price: jacketDetails.price,
        name: jacketDetails.name,
        brand: jacketDetails.brand,
        category: jacketDetails.category,
        manufacture_date: jacketDetails.manufacture_date,
        rating: jacketDetails.rating,
        status:jacketDetails.status,
        subtotal: jacketDetails.price,
        quantity: 1

};
this.basketService.addToBasket(item);
this.changeDetector.detectChanges(); // Update the view if necessary
} else {
console.error('Details not available for jacket with ID${clothesId}');
}
}
}