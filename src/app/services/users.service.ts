import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import {User} from '../user';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  users: User[] = [{
    id: 1,
    first_name: 'javed',
    last_name: 'khan',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg'
  }];

  private apiUrl = 'https://reqres.in/api/users';
  fetchUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
      .pipe(
        map(users => users.data),
        catchError(this.handleError('fetchUsers', this.users))
      );
  }
  fetchUser(id: number): Observable<User> {
    return this.http.get<User[]>(this.apiUrl + '/' + id)
      .pipe(
        map(user => user.data),
        catchError(this.handleError('fetchUsers', this.users))
      );
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      return of(result as T);
    };
  }
}
