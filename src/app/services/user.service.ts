import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,of } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/user';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServer = environment.apiServer;
  httpHeader = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private _http: HttpClient) { }
//  loginUser(user): Observable<User[]> {
// console.log("weduewydewdw",user)
//     return this._http.post<User[]>(this.apiServer + 'user/login', user)
  
//   }

loginUser(user: User): Observable<any> {
    return this._http.post<User>(this.apiServer + '/user/login', user, this.httpHeader)
      .pipe(
        catchError(this.handleError<User>('Login User'))
      );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
