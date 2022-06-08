import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  sidf_menu_logo="assets/images/SIDF_menu_logo.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
