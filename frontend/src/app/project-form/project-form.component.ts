import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { Project } from '../models/Project.model';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss'],
})
export class ProjectFormComponent implements OnInit {
  projectForm!: FormGroup;
  loading!: boolean;
  project!: Project;
  errorMsg!: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private projects: ProjectsService,
    private auth: AuthService
  ) {}
  ngOnInit(): void {
    this.projectForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null, Validators.required],
    });
  }
  onCreate() {
    this.loading = true;
    const project = new Project();
    project.title = this.projectForm.get('title')?.value;
    project.description = this.projectForm.get('description')?.value;
    project.createdBy = this.auth.getUserId();
    this.projects
      .createProject(project)
      .then(() => {
        this.loading = false;
        this.router.navigate(['/projects']);
      })
      .catch((error: { message: string }) => {
        this.loading = false;
        this.errorMsg = error.message;
      });
  }
}
