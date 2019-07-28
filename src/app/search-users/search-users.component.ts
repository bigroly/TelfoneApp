import { Component, OnInit } from '@angular/core';
import { User } from '../globals/models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.scss']
})
export class SearchUsersComponent implements OnInit {

  private users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().then(response => {
      this.users = response.data;
    });
  }

}
