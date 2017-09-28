import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { UserService } from '../services/user.service';
import { LoggedInUser } from '../shared/utils';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {username: '', password: '', remember: false};
  
  constructor(public dialogRef:MdDialogRef<LoginComponent>,
    private userService:UserService) { }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log("User: ", this.user);
    if (this.user.remember) {
      localStorage.setItem(LoggedInUser, btoa(this.user.username+':'+this.user.password));
    }
    this.userService.setLoggedIn(true);
    this.dialogRef.close(true);
  }

}
