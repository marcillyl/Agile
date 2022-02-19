import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';
import { Project } from '../models/Project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects$ = new Subject<Project[]>();
  constructor(private http: HttpClient, private auth: AuthService) {}
  createProject(project: Project) {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append('project', JSON.stringify(project));
      this.http
        .post<any>('http://localhost:4000/api/projects', formData)
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
