import { Component, OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
@Component({
  selector: 'app-ilr-org-info',
  templateUrl: './ilr-org-info.component.html',
  styleUrls: ['./ilr-org-info.component.css']
})
export class IlrOrgInfoComponent implements OnInit {

  date='';
  mocSelected=true;
  misaSelected=false;
  hasIndustrialLicense=false;
  initialLicenseSelected=true;
  finalLicenseSelected=false;
  constructor() { }

  ngOnInit(): void {
  }
  toggleMOC()
  {
    this.mocSelected=true;
    this.misaSelected=false;
  }
  toggleMISA()
  {
    this.mocSelected=false;
    this.misaSelected=true;
    console.log(this.hasIndustrialLicense);
  }
  check()
  {
    console.log(this.hasIndustrialLicense);
    console.log(this.date);
  }
  hasInitialLicense()
  {
    this.initialLicenseSelected=true;
    this.finalLicenseSelected=false;
  }
  hasFinalLicense()
  {
    this.initialLicenseSelected=false;
    this.finalLicenseSelected=true;
  }

}
