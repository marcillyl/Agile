import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { SingleProjectComponent } from './single-project/single-project.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: ProfileComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'project/:id', component: SingleProjectComponent },
  { path: 'new-project', component: ProjectFormComponent },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
