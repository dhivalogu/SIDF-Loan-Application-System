import { Component, OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { Injectable } from '@angular/core';
import {
  NgbDateStruct, NgbCalendar, NgbCalendarIslamicCivil, NgbDatepickerI18n
} from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup,Validators,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-ilr-org-info',
  templateUrl: './ilr-org-info.component.html',
  styleUrls: ['./ilr-org-info.component.css'],
 
})
export class IlrOrgInfoComponent implements OnInit {


  DAICompleted=false;
  mocInfoCompleted=false;
  misaInfoCompleted=false;
  licenseInfoCompleted=false;

  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    
  }
  

}
