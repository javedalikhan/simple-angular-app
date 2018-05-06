import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {Users, User, UserAttr} from '../user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  user: User;
  users: Users;
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://reqres.in/api/users';

  fetchUsers(): Observable<Users> {
    return this.http.get<Users>(this.apiUrl)
      .pipe(
        map(users => users),
        catchError(this.handleError('fetchUsers', this.users))
      );
  }
  fetchUser(id: number): Observable<User> {
    return this.http.get<User>(this.apiUrl + '/' + id)
      .pipe(
        map(user => user),
        catchError(this.handleError('fetchUsers', this.user))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
