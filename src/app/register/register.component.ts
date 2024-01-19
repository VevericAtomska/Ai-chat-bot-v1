import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from '../user.service';
export interface User {
  id: number;
  name: string;
  surname: string;
  email: string;
  password: string;
  repeatPassword: string;
  address: string;
  phone: string;
  gender: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    id: 1,
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    phone: '',
    gender: '',
  };

  constructor(private router: Router,  private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      this.user.id &&
      this.user.name &&
      this.user.surname &&
      this.user.email &&
      this.user.password &&
      this.user.repeatPassword &&
      this.user.address &&
      this.user.phone &&
      this.user.gender &&
      this.user.password === this.user.repeatPassword &&
      this.user.email.includes('@')
    ) {
      this.userService.registerUser(this.user);
      console.log(this.user);

      this.router.navigate(['/home']);
    } else {
      alert('Please fill in all fields correctly');
    }
  }
}
