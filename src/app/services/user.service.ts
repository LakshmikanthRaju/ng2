import { Injectable } from '@angular/core';

import { User, UserStorageKey } from '../shared/utils';

@Injectable()
export class UserService {
  private loggedIn: boolean;

  constructor() { }

  logIn(user:User):void {
    this.loggedIn = true;
    if (user.remember) {
      localStorage.setItem(UserStorageKey, btoa(user.username+':'+user.password));
    } 
  }

  logOut():void {
    this.loggedIn = false;
  }

  isLoggedIn():boolean {
    return this.loggedIn;
  }
}
