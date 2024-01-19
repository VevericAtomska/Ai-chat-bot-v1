import { Injectable } from '@angular/core';
import { User } from 'src/app/register/register.component'; // Uvoz interfejsa User iz register.component.ts

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private localStorageKey = 'users';

  constructor() {}

  private getUsersFromLocalStorage(): User[] {
    const usersJson = localStorage.getItem(this.localStorageKey);
    return usersJson ? JSON.parse(usersJson) : [];
  }

  private saveUsersToLocalStorage(users: User[]): void {
    const usersJson = JSON.stringify(users);
    localStorage.setItem(this.localStorageKey, usersJson);
  }


  updateUser(user: User): void {
    const users = this.getUsersFromLocalStorage();
    const updatedUsers = users.map((u: User) => (u.id === user.id ? { ...u, ...user } : u));
    this.saveUsersToLocalStorage(updatedUsers);
  }


  getUserByEmail(email: string): User | undefined {
    const users = this.getUsersFromLocalStorage();
    return users.find((user: User) => user.email === email);
  }
  registerUser(user: User): void {
    const users = this.getUsersFromLocalStorage();
    users.push(user);
    this.saveUsersToLocalStorage(users);
  }

}
