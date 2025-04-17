import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class LocaleStorageService {

  constructor() { }

  users:Array<User> = JSON.parse(localStorage.getItem('users') || '[]');

  getListUsers():Array<User>{
    return this.users;
  }

getUser(email: string, password: string): User | null {
  let userFound = this.users.find(existingUser => existingUser.email === email && existingUser.password === password);
  if (userFound) {
    return userFound;
  } else {
    return null;
  }
}

  addUser(user: User): boolean {
    console.log(user);
    let userFound = this.users.find(existingUser => existingUser.email === user.email);
    console.log(userFound)
    if (userFound === undefined) {
      user.id = 
      this.users.push(user);
      console.log(this.users)
      localStorage.setItem('users', JSON.stringify(this.users));
      return true;
    }
    return false;
  }

}
