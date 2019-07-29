import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

import { Iuser } from '../models/Iuser';
import { HttpClient } from '@angular/common/http';
import { IuserHttp } from '../models/user-http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public async getUsers() {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    try {
      return await axios.get(apiUrl);
    } catch (err) {
      throw err;
    }
  }

  public getUsersV2(): Observable<IuserHttp> {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    return this.http.get<IuserHttp>(apiUrl);
  }

  public async postUser(user: Iuser) {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    try {
      return await axios.post(apiUrl, user);
    } catch (err) {
      throw err;
    }
  }
}
