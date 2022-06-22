import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { delay, Subscription } from 'rxjs';
import { AuthorityInformation } from 'src/app/models/authority-info.model';
import { ILRService } from 'src/app/services/ilr.service';

@Component({
  selector: 'app-doa-info',
  templateUrl: './doa-info.component.html',
  styleUrls: ['./doa-info.component.css'],
})
export class DoaInfoComponent implements OnInit {
  displayedColumns: string[] = ['name', 'idType', 'id', 'mobile', 'mail'];
  dataSource = [];
  crNo = '';
  licenseSub: Subscription = this.ILRService.licenseDetailsSaved.subscribe(
    (crNo) => {
      this.crNo = crNo;
      this.refreshData();
    }
  );
  authorityInfoSub: Subscription = this.ILRService.authorityAdded.subscribe(
    () => {
      this.refreshData();
    }
  );
  AuthorisedPersonForm: boolean = false;
  @ViewChild(MatTable) myTable!: MatTable<any>;
  authorisedPersonFB = this.fb.group({
    idType: ['', Validators.required],
    id: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, public ILRService: ILRService) {}

  ngOnInit(): void {}
  toggleAuthorisedPersonForm() {
    this.AuthorisedPersonForm = !this.AuthorisedPersonForm;
  }
  addAuthorizedPerson() {
    const AuthorityData: AuthorityInformation = {
      name: '',
      idType: this.authorisedPersonFB.controls['idType'].value,
      id: this.authorisedPersonFB.controls['id'].value,
      mobile: '',
      mail: '',
      crNo: this.crNo,
    };
    console.log(AuthorityData);
    this.ILRService.addAuthorizedPersonsList(AuthorityData);
  }
  refreshData() {
    let result: any;
    this.ILRService.getAuthorizedPersonsList().subscribe((responseData) => {
      result = responseData;
      console.log(responseData);
      this.dataSource = result;
      this.myTable.renderRows();
    });
  }
}
