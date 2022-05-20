import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth$ = new BehaviorSubject<boolean>(false);
  private authToken!: string;
  private userId!: string;
  constructor(private http: HttpClient, private router: Router) {}
  getToken() {
    return this.authToken;
  }
  getUserId() {
    return this.userId;
  }
  logout() {
    this.authToken = '';
    this.userId = '';
    this.isAuth$.next(false);
    this.router.navigate(['login']);
  }
  createUser(username: string, email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http
        .post<any>('http://localhost:4000/api/auth/signup', {
          username,
          email,
          password,
        })
        .subscribe(
          (response: { message: string }) => {
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  loginUser(email: string, password: string) {
    return new Promise((resolve, reject) => {
      this.http
        .post<any>('http://localhost:4000/api/auth/login', { email, password })
        .subscribe(
          (response: { userId: string; token: string }) => {
            this.userId = response.userId;
            this.authToken = response.token;
            this.isAuth$.next(true);
            resolve(response);
          },
          (error) => {
            reject(error);
          }
        );
    });
  }
  deleteUser(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete<any>('http://localhost:4000/api/user/' + id).subscribe(
        (response: { message: string }) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
  getOneUser(id: string) {
    return new Promise((resolve, reject) => {
      this.http.get<any>('http://localhost:4000/api/user/' + id).subscribe(
        (response: { message: string }) => {
          resolve(response);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
