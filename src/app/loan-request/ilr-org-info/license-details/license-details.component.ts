import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { response } from 'express';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ILRService } from 'src/app/services/ilr.service';
@Component({
  selector: 'app-license-details',
  templateUrl: './license-details.component.html',
  styleUrls: ['./license-details.component.css'],
})
export class LicenseDetailsComponent implements OnInit {
  date = '';
  mocSelected = true;
  misaSelected = false;
  hasIndustrialLicense = false;
  initialLicenseSelected = true;
  finalLicenseSelected = false;
  licenseDetailsCompleted = false;
  constructor(
    private formBuilder: FormBuilder,
    private ILRService: ILRService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.commercialLicenseGroup.pristine;
  }

  commercialLicenseGroup = this.formBuilder.group({
    crNumber: ['', Validators.required],
    crDate: ['', Validators.required],
  });
  indInitLicenseFg = this.formBuilder.group({
    initialLicenseNo: ['', Validators.required],
    initialLicenseDate: ['', Validators.required],
  });
  indFinalLicenseFg = this.formBuilder.group({
    finalLicenseNo: ['', Validators.required],
    finalLicenseDate: ['', Validators.required],
  });
  misaLicenseFg = this.formBuilder.group({
    misaLicenseNo: ['', Validators.required],
    misaLicenseDate: ['', Validators.required],
  });

  toggleMOC() {
    this.mocSelected = true;
    this.misaSelected = false;
  }
  toggleMISA() {
    this.mocSelected = false;
    this.misaSelected = true;
    this.hasIndustrialLicense = false;
    console.log(this.hasIndustrialLicense);
  }
  check() {
    console.log('hi');
  }
  hasInitialLicense() {
    this.initialLicenseSelected = true;
    this.indFinalLicenseFg.reset();
    this.finalLicenseSelected = false;
  }
  hasFinalLicense() {
    this.initialLicenseSelected = false;
    this.indInitLicenseFg.reset();
    this.finalLicenseSelected = true;
  }
  saveButtonValidation() {
    if (this.mocSelected && this.hasIndustrialLicense) {
      return (
        this.commercialLicenseGroup.valid &&
        (this.indInitLicenseFg.valid || this.indFinalLicenseFg.valid)
      );
    } else if (this.mocSelected && !this.hasIndustrialLicense) {
      return this.commercialLicenseGroup.valid;
    } else if (this.misaSelected) {
      return this.misaLicenseFg.valid;
    } else {
      return false;
    }
  }
  saveLicenseDetails() {
    this.licenseDetailsCompleted = true;
    console.log(this.commercialLicenseGroup.value);
    const licenseDetails = {
      type: this.licenseType(),
      CR_Number: this.commercialLicenseGroup.controls['crNumber'].value,
      CR_Date: this.commercialLicenseGroup.controls['crDate'].value,
      IND_init_no: this.indInitLicenseFg.controls['initialLicenseNo'].value,
      IND_init_date: this.indInitLicenseFg.controls['initialLicenseDate'].value,
      IND_final_no: this.indFinalLicenseFg.controls['finalLicenseNo'].value,
      IND_final_date: this.indFinalLicenseFg.controls['finalLicenseDate'].value,
      MISA_Number: this.misaLicenseFg.controls['misaLicenseNo'].value,
      MISA_Date: this.misaLicenseFg.controls['misaLicenseDate'].value,
    };
    this.ILRService.verifyLicenseDetails().subscribe((responseData) => {
      let response: any;
      response = responseData;
      for (var i in response) {
        if (
          response[i].crNo == licenseDetails.CR_Number &&
          licenseDetails.type == 1
        ) {
          this.ILRService.licenseDetailsSaved.emit(licenseDetails.CR_Number);
          this.commercialLicenseGroup.disable();
          return;
        }
      }
      this.snackBar.open('Enter Valid License Number', 'Retry');
    });
  }
  licenseType() {
    if (this.mocSelected && this.hasIndustrialLicense) {
      return 0;
    } else if (this.mocSelected) {
      return 1;
    } else {
      return 2;
    }
  }
}
