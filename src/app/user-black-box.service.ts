import {Injectable} from '@angular/core';
import {User} from './dtos/user';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserBlackBoxService {

  users: Map<string, User> = new Map<string, User>([
    ['1', new User('1', 'Anna', 20)],
    ['2', new User('2', 'Bob', 30)],
    ['3', new User('3', 'Susan', 25)],
  ]);

  getAllUser(): Observable<User[]> {
    return of(Array.from(this.users.values()));
  }

  getUserById(id: string): Observable<User> {
    console.log('we get user ', id, ' at ', new Date());
    return of(this.users.get(id));
  }

}
