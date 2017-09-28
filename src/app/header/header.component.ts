import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';
import { LoginComponent } from '../login/login.component';
import { UserService } from '../services/user.service';

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
    this.loggedIn = this.userService.isLoggedIn();
    this.logInString = (this.loggedIn) ? "Logout" : "Login";
  }

  openLoginForm() {
    if (this.loggedIn) {

      this.loggedIn = false;
      this.userService.logOut();
      this.logInString = "Login";
    
    } else {

      let dialogRef = this.dialog.open(LoginComponent, {width: '500px', height: '450px'});
      dialogRef.afterClosed().subscribe(val => {
        this.loggedIn = val;
        this.logInString = (this.loggedIn) ? "Logout" : "Login";
      });
    }
  }
}
