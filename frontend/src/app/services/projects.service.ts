import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Project } from '../models/Project.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  projects$ = new Subject<Project[]>();
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
  getProjects(id: string) {
    this.http.get<any>('http://localhost:4000/api/project/all/' + id).subscribe(
      (projects: Project[]) => {
        this.projects$.next(projects);
      },
      (error) => {
        this.projects$.next([]);
        console.error(error);
      }
    );
  }
}
