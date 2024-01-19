import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import {HomeComponent} from "./home/home.component";
import {BookDetailsComponent} from "./book-details/book-details.component";
import {CartComponent} from "./cart/cart.component";
import {ProfileComponent} from "./profile/profile.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component:HomeComponent},
  { path: 'book-details/:id', component: BookDetailsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'profile', component: ProfileComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page if no path specified
  { path: '**', redirectTo: '/login' }, // Redirect to login page if any other path specified
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
