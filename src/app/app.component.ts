import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Coffee_Store';
  constructor(private spinner:NgxSpinnerService,private route:Router){

  }

  Homescreen(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.route.navigate(['/home']);
    }, 1000);

  }
}
