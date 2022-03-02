import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading!: boolean;
  errorMsg!: string;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  onLogin() {
    this.loading = true;
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.auth
      .loginUser(email, password)
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
