import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../dtos/user';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-balance-archived',
  templateUrl: './balance-archived.component.html',
  styleUrls: ['./balance-archived.component.css']
})
export class BalanceArchivedComponent implements OnInit {

 @Input() user!: User;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.$currentUser.subscribe(user => this.user = user);
  }
}
