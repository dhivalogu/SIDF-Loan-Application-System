import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoanRequestComponent } from './loan-request/loan-request.component';
import { IlrOrgInfoComponent } from './loan-request/ilr-org-info/ilr-org-info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from "ngx-spinner";
import { LicenseDetailsComponent } from './loan-request/ilr-org-info/license-details/license-details.component';
import { DoaInfoComponent } from './loan-request/ilr-org-info/doa-info/doa-info.component';
import { CrInfoComponent } from './loan-request/ilr-org-info/cr-info/cr-info.component';
import { OtherDocsComponent } from './loan-request/ilr-org-info/other-docs/other-docs.component';
import { ILRService } from './services/ilr.service';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    LoanRequestComponent,
    IlrOrgInfoComponent,
    LicenseDetailsComponent,
    DoaInfoComponent,
    CrInfoComponent,
    OtherDocsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [LoginService,ILRService],
  bootstrap: [AppComponent],
})
export class AppModule { }
