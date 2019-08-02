import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    model: any = {};
    @Output() cancelRegisterEvent = new EventEmitter();

    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() {
    }

    register() {
        this.authService.register(this.model)
        .subscribe(
            response => {
              console.log('Registration successfull.');
            },
            error => {
              console.log('Error: ', error);
            }
          );
    }

    cancel() {
        this.cancelRegisterEvent.emit();
    }
}
