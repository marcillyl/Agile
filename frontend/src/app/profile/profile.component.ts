import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  loading!: boolean;
  userId!: string;
  user!: any;
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.userId = this.auth.getUserId();
    this.auth
      .getOneUser(this.userId)
      .then((response) => (this.user = response));
  }
  onLogout() {
    this.auth.logout();
  }
  onDelete() {
    this.loading = true;
    this.auth.deleteUser(this.userId).then(() => {
      this.loading = false;
      this.auth.logout();
    });
  }
}
