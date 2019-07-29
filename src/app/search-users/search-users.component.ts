import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { IappState } from '../store/state/app.state';
import { selectUserList } from '../store/selectors/user.selector';
import { GetUsers } from '../store/actions/user.actions';
import { interval } from 'rxjs';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  private users$ = this.store.pipe(select(selectUserList));
  private refreshInterval = interval(30000);

  displayedColumns: string[] = [
    'userId',
    'firstName',
    'lastName',
    'displayName',
    'description',
    'department',
    'team'
  ];

  constructor(private store: Store<IappState>) {
    this.refreshInterval.subscribe(intervalMet => this.refreshUsers());
  }

  ngOnInit() {
    this.refreshUsers();
  }

  private refreshUsers() {
    this.store.dispatch(new GetUsers());
  }

}
