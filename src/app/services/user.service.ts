import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

import { User } from '../globals/models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public async getUsers() {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    try {
      return await axios.get(apiUrl);
    } catch (err) {
      throw err;
    }
  }

  public async postUser(user: User) {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    try {
      return await axios.post(apiUrl, user);
    } catch (err) {
      throw err;
    }
  }
}
