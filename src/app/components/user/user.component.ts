import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: any;
  newUser = {} as User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.users = this.userService.getUsers();
  }

  addUser(user: User) {
    user.id = this.users.length + 1;
    this.userService.addUser(user);
    this.users = this.userService.getUsers();
    this.newUser = {} as User;
  }

  deleteUser(user: User) {
    this.userService.deleteUser(user);
    this.users = this.userService.getUsers();
  }

}
