import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
export const endpoint = 'http://134.209.199.123:9000/';
import { JwtHelperService } from '@auth0/angular-jwt';
const helper = new JwtHelperService();
@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private http: HttpClient) {
  }
  private extractData(res) {
    const  body = res;
    // console.log('service response', res);
    return body || { };
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  public isAuthenticated(): boolean {
    const token = sessionStorage.getItem('Token');
    if(token){
      return !helper.isTokenExpired(token);
    }else{
      return false
    }
    
  }

  logIn(data): Observable<any> {
    console.log(data);
    return this.http.post(endpoint + 'account/login/', data).pipe(
      map(this.extractData
      ));
    }
  
}
