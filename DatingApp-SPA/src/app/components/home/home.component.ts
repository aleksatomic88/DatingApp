import { Component, OnInit } from '@angular/core';
import { ValueService } from '../../services/value.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  registerMode = false;

  // values: any;

  constructor(private valueService: ValueService) { }

  ngOnInit() {
    // this.valueService.getValues().subscribe(
    //     response => {
    //       this.values = response;
    //       console.log('Valuessss:', this.values);
    //     },
    //     error => {
    //       console.log('Error: ', error);
    //     }
    //   );
  }

  toggleRegisterMode(){
      this.registerMode = !this.registerMode;
  }
}