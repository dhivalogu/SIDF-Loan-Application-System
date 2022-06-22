import { Component, OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { Injectable } from '@angular/core';
import { ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion'
import {
  NgbDateStruct,
  NgbCalendar,
  NgbCalendarIslamicCivil,
  NgbDatepickerI18n,
} from '@ng-bootstrap/ng-bootstrap';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ILRService } from 'src/app/services/ilr.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ilr-org-info',
  templateUrl: './ilr-org-info.component.html',
  styleUrls: ['./ilr-org-info.component.css'],
})
export class IlrOrgInfoComponent implements OnInit {

  @ViewChild(MatAccordion) myAcc!: MatAccordion;
  DAICompleted = false;
  step:number=0;
  mocInfoCompleted = false;
  misaInfoCompleted = false;
  licenseSub: Subscription = this.ILRService.licenseDetailsSaved.subscribe(
    (crNo) => {
      this.licenseInfoCompleted = true;
    }
  );
  licenseInfoCompleted = false;

  constructor(
    private formBuilder: FormBuilder,
    public ILRService: ILRService
  ) {}

  ngOnInit(): void {}

  changeStep(step:number)
  {
    this.step=step;
    console.log(step);
    console.log(this.myAcc.togglePosition);
  }
}
  

