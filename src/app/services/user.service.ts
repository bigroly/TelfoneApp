import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public async getUsers() {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    try {
      const response = await axios.get(apiUrl);
      return response;
    } catch (err) {
      throw err;
    }
  }
}
