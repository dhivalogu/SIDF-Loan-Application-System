import { Component, OnInit,ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatTable } from '@angular/material/table';
import { delay } from 'rxjs';
import { AuthorityInformation } from 'src/app/models/authority-info.model';
import { ILRService } from 'src/app/services/ilr.service';


@Component({
  selector: 'app-doa-info',
  templateUrl: './doa-info.component.html',
  styleUrls: ['./doa-info.component.css']
})
export class DoaInfoComponent implements OnInit {

  displayedColumns: string[] = ['name','idType','id','mobile','mail'];
  dataSource=[] ;
  AuthorisedPersonForm:boolean=false;
  @ViewChild(MatTable) myTable!: MatTable<any>;
  authorisedPersonFB=this.fb.group({
    idType:['',Validators.required],
    id:['',Validators.required]
  })

  constructor(private fb:FormBuilder,public ILRService:ILRService) { }

  ngOnInit(): void {
    this.refreshData();
    
  }
  toggleAuthorisedPersonForm()
  {
    
    this.AuthorisedPersonForm=!this.AuthorisedPersonForm;
  }
  addAuthorizedPerson()
  {
    const AuthorityData:AuthorityInformation={
      name:'',
      idType:this.authorisedPersonFB.controls['idType'].value,
      id:this.authorisedPersonFB.controls['id'].value,
      mobile:'',
      mail:''
      
    };
    this.ILRService.addAuthorizedPersonsList(AuthorityData);
    this.refreshData();
    delay(5000);
    this.refreshData();
    delay(5000);
    this.refreshData();
    this.refreshData();
  }
  refreshData()
  {
    let result:any;
    delay(5000);
    this.ILRService.getAuthorizedPersonsList().subscribe(responseData=>
      {
        result=responseData;
        console.log(responseData);
        this.dataSource=result;
      })
    delay(5000);
    
  }

}
