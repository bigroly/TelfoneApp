import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/User';

import { ToastrService } from 'ngx-toastr';
import { IappState } from '../store/state/app.state';

import { Store } from '@ngrx/store';
import { PostUser } from '../store/actions/user.actions';
import { Actions } from '@ngrx/effects';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private newUser: User;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService,
    private store: Store<IappState>,
    private storeUpdates$: Actions) {
      this.newUser = new User();
  }

  ngOnInit() {
  }

  public addUser() {
    try {
      this.userService.postUser(this.newUser).then(success => {
        this.toastrService.success('New User was added.', 'Success!');
      });
    } catch (err) {
      this.toastrService.error('There was an error submitting the user', 'failure');
    }
  }

  public addUserNgrx() {
    this.store.dispatch(new PostUser(this.newUser));
  }

}

