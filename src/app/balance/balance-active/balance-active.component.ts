import {Component, OnInit} from '@angular/core';
import {User} from '../../dtos/user';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-balance-active',
  templateUrl: './balance-active.component.html',
  styleUrls: ['./balance-active.component.css']
})
export class BalanceActiveComponent implements OnInit {

  user: User;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.$currentUser.subscribe(user => this.user = user);
  }

}
