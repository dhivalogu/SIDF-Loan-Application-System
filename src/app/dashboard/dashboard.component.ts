import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { delay } from 'rxjs';
import { ILRService } from '../services/ilr.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  sidf_menu_logo = 'assets/images/SIDF_menu_logo.svg';
  constructor(private router: Router, private spinner: NgxSpinnerService) {}

  ngOnInit(): void {}

  requestLoan() {
    this.router.navigate(['dashboard/loan_request']);
  }
}
