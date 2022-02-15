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
}
