import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  loggedIn: boolean;

  constructor() { }

  setLoggedIn(isLoggedIn:boolean):void {
    this.loggedIn = isLoggedIn;
  }

  isLoggedIn():boolean {
    return this.loggedIn;
  }
}
