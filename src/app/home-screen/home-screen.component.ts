import { Component, OnInit } from '@angular/core';

// CommonJS
const Swal = require('sweetalert2');

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  callswal() {
    Swal.fire('Hello world!');
  }
}
