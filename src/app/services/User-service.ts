
import { Subject } from 'rxjs/Subject';
import {User} from '../model/User.model';

export class UserService {
  private users: User[] = [
    new User('Aminata', 'Sall', 'amida8@gmail.com', 'jus de mangue', ['shopping', 'wanneuh'])
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
