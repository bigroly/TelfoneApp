import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';

import { IappState } from '../store/state/app.state';
import { selectUserList } from '../store/selectors/user.selector';
import { GetUsers } from '../store/actions/user.actions';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  users$ = this.store.pipe(select(selectUserList));

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
  }

  ngOnInit() {
    this.refreshUsers();
  }

  private refreshUsers() {
    this.store.dispatch(new GetUsers());
  }

}
