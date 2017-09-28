import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';

import { LoggedInUser } from '../shared/utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logInString:string;
  loggedIn:boolean;
  constructor(public dialog:MdDialog,
    private userService:UserService) { }

  ngOnInit() {
    this.loggedIn = (localStorage.getItem(LoggedInUser)) ? true: false;
    this.userService.setLoggedIn(this.loggedIn);
    this.logInString = (this.loggedIn) ? "Logout" : "Login";
  }

  openLoginForm() {
    if (!this.logInString) {

      localStorage.removeItem(LoggedInUser);
      this.loggedIn = false;
      this.userService.setLoggedIn(false);
      this.logInString = "Login";
    
    } else {

      let dialogRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
      dialogRef.afterClosed().subscribe(val => {
        this.loggedIn = val;
        this.userService.setLoggedIn(this.loggedIn);
        this.logInString = (this.loggedIn) ? "Logout" : "Login";
      });
    }
  }
}
