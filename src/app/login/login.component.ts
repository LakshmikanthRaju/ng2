import { Component, OnInit } from '@angular/core';

import { MdDialog, MdDialogRef } from '@angular/material';

import { UserService } from '../services/user.service';
import { User } from '../shared/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User;
  
  constructor(public dialogRef:MdDialogRef<LoginComponent>,
    private userService:UserService) { }

  ngOnInit() {
    this.user.remember = false;
  }

  onSubmit() {
    console.log("User: ", this.user);
    this.userService.logIn(this.user);
    this.dialogRef.close(true);
  }

}
