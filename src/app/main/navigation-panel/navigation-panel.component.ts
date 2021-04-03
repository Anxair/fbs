import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';


export const baseUrl = 'http://localhost:3333';
export const navigationItem = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    url: `/dashboard`
  },
  {
    id: 'balance',
    name: 'Balance',
    url: `/balance`
  },
  {
    id: 'cards',
    name: 'Cards',
    url: `/cards`
  },
  {
    id: 'options',
    name: 'Options',
    url: `/options`
  },
  {
    id: 'support',
    name: 'Support',
    url: `/support`
  }
];

@Component({
  selector: 'app-navigation-panel',
  templateUrl: './navigation-panel.component.html',
  styleUrls: ['./navigation-panel.component.scss']
})
export class NavigationPanelComponent implements OnInit {

  active = '';
  navigation = navigationItem;

  constructor(private router: Router,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.navigation.map(value => {
      if (value.url === this.route.snapshot['_routerState'].url) {
        this.active = value.id;
      }
    });
  }

  changePage(): void {
    this.navigation.map(value => {
      if (value.id === this.active) {
        this.router.navigate([value.url]);
      }
    });
  }
}
