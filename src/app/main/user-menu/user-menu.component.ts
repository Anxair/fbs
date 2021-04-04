import {Component, OnInit} from '@angular/core';
import {DataService} from '../../data.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: [`./user-menu.component.scss`]
})
export class UserMenuComponent implements OnInit {

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  chooseUser(id: string): void {
    this.dataService.switchUser(id);
  }
}
