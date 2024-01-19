import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register';
import { LoginModule } from './login/login.module';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgOptimizedImage} from "@angular/common";
import { HomeComponent } from './home/home.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatLegacyChipsModule} from "@angular/material/legacy-chips";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ChatComponent } from './chat/chat.component' ;
import {ChatbotService } from './chat.service';
import {MatSelectModule} from "@angular/material/select";
import {HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    BookDetailsComponent,
    CartComponent,
    ProfileComponent,
    ChatComponent,

  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterModule,
        LoginModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgOptimizedImage,
        MatToolbarModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatLegacyChipsModule,
        NoopAnimationsModule,
        MatFormFieldModule,
        MatSnackBarModule,
        MatSelectModule,
    ],
  providers: [ChatbotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
