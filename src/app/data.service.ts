import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {User} from './dtos/user';
import {UserBlackBoxService} from './user-black-box.service';
import {mergeMap, shareReplay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private blackBoxService: UserBlackBoxService) {
    this.$currentUser = this.$currentUserId.pipe(
      mergeMap(id => blackBoxService.getUserById(id)),
      shareReplay(1)
    );
  }

  $currentUserId: Subject<string> = new Subject<string>();
  $currentUser: Observable<User>;

  getCurrentUser(): Observable<User> {
    return this.$currentUser;
  }

  switchUser(id: string): void {
    this.$currentUserId.next(id);
  }
}
