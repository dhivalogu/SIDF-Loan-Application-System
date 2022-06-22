import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { AuthorityInformation } from '../models/authority-info.model';
import { OrgInfo } from '../models/org-info.model';
import { NgxSpinnerService } from 'ngx-spinner';
@Injectable()
export class ILRService {
  orgData: OrgInfo = {} as OrgInfo;
  licenseDetailsSaved = new EventEmitter();
  authorityAdded = new EventEmitter();
  constructor(private http: HttpClient,public spinner:NgxSpinnerService) {}

  verifyLicenseDetails() {
    return this.http.get('http://localhost:3000/licenseDetails');
  }

  getAuthorizedPersonsList() {
    return this.http.get('http://localhost:3000/authorised_persons');
  }

  getOrganizationInfo(crNo: string) {
    return this.http.get<OrgInfo[]>('http://localhost:3000/organizations');
  }

  addAuthorizedPersonsList(AuthorityData: AuthorityInformation) {
    let result: any;
    this.http
      .get('http://localhost:3000/person_id')
      .subscribe((responseData) => {
        console.log(responseData);
        result = responseData;
        for (var item in result) {
          if (result[item].id == AuthorityData.id) {
            result[item].crNo = AuthorityData.crNo;
            this.http
              .post('http://localhost:3000/authorised_persons', result[item])
              .subscribe((responseData) => {
                console.log(responseData);
                this.authorityAdded.emit();
              });
            console.log('Success');
          }
        }
      });
  }
}
