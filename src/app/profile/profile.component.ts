import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from '../user.service';

interface User {
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
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
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
  constructor(private snackBar: MatSnackBar, private userService: UserService) {}

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('loggedInUser') || '{}');

  }

  onSave(): void {
    localStorage.setItem('loggedInUser', JSON.stringify(this.user));

    this.userService.updateUser(this.user);
    console.log(this.user);
    this.snackBar.open('User information updated successfully!', 'Close', {
      duration: 2000,
      verticalPosition: 'top'
    });
  }

}
