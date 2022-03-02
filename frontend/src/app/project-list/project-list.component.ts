import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/Project.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
  projectSub!: Subscription;
  projects!: Project[];
  loading!: boolean;
  errorMsg!: string;
  userId!: string;
  constructor(
    private project: ProjectsService,
    private router: Router,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.userId = this.auth.getUserId();
    this.loading = true;
    this.projectSub = this.project.projects$.subscribe(
      (projects) => {
        this.projects = projects;
        this.loading = false;
        this.errorMsg = '';
      },
      (error) => {
        this.loading = false;
        this.errorMsg = JSON.stringify(error);
      }
    );
    this.project.getProjects(this.userId);
    console.log(this.projects);
  }
  onClickProject(id: string) {
    this.router.navigate(['/project/', id]);
  }
}
