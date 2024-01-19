import {NgModule} from "@angular/core";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {LoginComponent} from "./login.component";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations:[
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage,
    RouterLink
  ],
  exports:[
    LoginComponent
  ],
})
export class LoginModule{}
