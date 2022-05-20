import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../models/Project.model';
import { AuthService } from '../services/auth.service';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-single-project',
  templateUrl: './single-project.component.html',
  styleUrls: ['./single-project.component.scss'],
})
export class SingleProjectComponent {
  loading!: boolean;
  project!: any;
  userId!: string;
  constructor(
    private projects: ProjectsService,
    private route: ActivatedRoute,
    private auth: AuthService
  ) {}
  ngOnInit() {
    this.userId = this.auth.getUserId();
    this.loading = true;
    this.route.params.subscribe((params) => {
      this.projects.getProjectById(params['id']).then((response) => {
        this.project = response;
        this.loading = false;
      });
    });
  }
}
