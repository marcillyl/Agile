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
  constructor(private auth: AuthService) {}
  ngOnInit(): void {
    this.userId = this.auth.getUserId();
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
