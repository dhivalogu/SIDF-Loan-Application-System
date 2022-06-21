import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';
import { OrgInfo } from 'src/app/models/org-info.model';
import { ILRService } from 'src/app/services/ilr.service';
@Component({
  selector: 'app-cr-info',
  templateUrl: './cr-info.component.html',
  styleUrls: ['./cr-info.component.css']
})
export class CrInfoComponent implements OnInit {

  orgData:OrgInfo={} as OrgInfo;
  constructor(private ILRService:ILRService) { }

  ngOnInit(): void {
    this.getOrganizationInfo();
  }

  getOrganizationInfo()
  {
    var crNo="76891234";
    this.ILRService.getOrganizationInfo(crNo).subscribe(
      (responseData)=>
      {
        for(var item in responseData)
        {
          if(responseData[item].crNo==crNo)
          {
            this.orgData=responseData[item];
          }
        }
      }
    )
  }

}
