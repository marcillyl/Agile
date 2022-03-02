import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../auth.component.scss'],
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  loading!: boolean;
  errorMsg!: string;
  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }
  onSignup() {
    this.loading = true;
    const username = this.signupForm.get('username')?.value;
    const email = this.signupForm.get('email')?.value;
    const password = this.signupForm.get('password')?.value;
    this.auth.createUser(username, email, password).then(() => {
      this.auth
        .loginUser(email, password)
        .then(() => {
          this.loading = false;
          this.router.navigate(['/projects']);
        })
        .catch((error: { message: string }) => {
          this.loading = false;
          console.error(error);
          this.errorMsg = error.message;
        });
    });
  }
}
