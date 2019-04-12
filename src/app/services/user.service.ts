import {Injectable} from '@angular/core';
import {User} from '../models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users = [{} as User];

  constructor() {
    this.users = [
      {id: 1, firstName: 'Pegasus', lastName: 'some text'},
      {id: 2, firstName: 'Roter Oktober', lastName: 'some text'},
      {id: 3, firstName: 'Mickey Mouse', lastName: 'some text'},
      {id: 4, firstName: 'Kasparov', lastName: 'some text'}
    ];
  }

  getUsers() {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

  deleteUser(user: User) {
    const index: number = this.users.indexOf(user);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

}
