import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Project } from '../models/Project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  constructor(private http: HttpClient) {}
  createProject(project: Project) {
    return new Promise((resolve, reject) => {
      this.http
        .post<any>('http://localhost:4000/api/project/', project)
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
}
