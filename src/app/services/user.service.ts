import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import axios from 'axios';

import { Iuser } from '../models/Iuser';
import { HttpClient } from '@angular/common/http';
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

  public getUsersV2(): Observable<Iuser[]> {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    return this.http.get<Iuser[]>(apiUrl);
  }

  public async postUser(user: Iuser) {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    try {
      return await axios.post(apiUrl, user);
    } catch (err) {
      throw err;
    }
  }

  public postUserV2(user: Iuser): Observable<any> {
    const apiUrl = environment.apiUrl + environment.apiScopeKey + '/profiles';
    return this.http.post(apiUrl, user);
  }
}
