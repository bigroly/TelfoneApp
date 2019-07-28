import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../globals/models/user';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private newUser: User;

  constructor(
    private userService: UserService,
    private toastrService: ToastrService) {
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

}

