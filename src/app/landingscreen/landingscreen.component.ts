import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.scss'],
})
export class LandingscreenComponent implements OnInit {
  constructor(private spinner:NgxSpinnerService,private route:Router) {}
  disabled: boolean = false;

  ngOnInit(): void {}

  letsTryCoffee(){
    this.spinner.show();
    setTimeout(() => {
      this.spinner.hide();
      this.route.navigateByUrl('/store');
    }, 3000);

  }
}
