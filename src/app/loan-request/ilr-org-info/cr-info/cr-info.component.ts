import { Component, OnInit } from '@angular/core';
import { delay, Subscription } from 'rxjs';
import { OrgInfo } from 'src/app/models/org-info.model';
import { ILRService } from 'src/app/services/ilr.service';
@Component({
  selector: 'app-cr-info',
  templateUrl: './cr-info.component.html',
  styleUrls: ['./cr-info.component.css'],
})
export class CrInfoComponent implements OnInit {
  orgData: OrgInfo = {} as OrgInfo;
  constructor(private ILRService: ILRService) {}
  licenseSub: Subscription = this.ILRService.licenseDetailsSaved.subscribe(
    (crNumber) => {
      this.getOrganizationInfo(crNumber);
    }
  );
  ngOnInit(): void {}

  getOrganizationInfo(crNo: any) {
    this.ILRService.getOrganizationInfo(crNo).subscribe((responseData) => {
      for (var item in responseData) {
        if (responseData[item].crNo == crNo) {
          this.orgData = responseData[item];
        }
      }
    });
  }
}
