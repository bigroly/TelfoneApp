import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../globals/models/user';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  private newUser: User;

  constructor(private userService: UserService) {
    this.newUser = new User();
  }

  ngOnInit() {

  }

  private addUser(formValue: User) {
    this.newUser = formValue;
    console.log(this.newUser);
  }

}
