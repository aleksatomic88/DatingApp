import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AlertifyService } from '../../services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
      public authService: AuthService,
      private alertify: AlertifyService,
      private router: Router
  ) { }

  ngOnInit() {
      this.authService.populateToken();
  }

  login() {
      this.authService.login(this.model).subscribe(
          (next) => this.alertify.success('Logged in succesfully!'),
          (error) => this.alertify.error('Failed to login!'),
          () => this.router.navigate(['/members'])
          );
  }

  loggedIn() {
    return this.authService.loggedIn();
  }

  logout() {
      localStorage.removeItem('token');
      this.router.navigate(['/home']);
      this.alertify.success('User logged out!');
  }
}
