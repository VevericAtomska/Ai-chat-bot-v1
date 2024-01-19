
import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../register/register.component';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent implements OnInit{
  user: User = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    password: '',
    repeatPassword: '',
    address: '',
    phone: '',
    gender: '',

  };
  constructor (private route:Router, private userService: UserService) {}
    ngOnInit(): void {}

      login(){
        const loggedInUser = this.userService.getUserByEmail(this.user.email);
        if (loggedInUser && loggedInUser.password === this.user.password) {
          localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
          this.route.navigate(['/home']);
          alert('Login success');
        } else {
          alert('Login failed');
        }
      }

    singIn(){
      this.route.navigate(['/register']);

    }


}
