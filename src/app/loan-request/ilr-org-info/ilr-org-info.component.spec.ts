import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IlrOrgInfoComponent } from './ilr-org-info.component';

describe('IlrOrgInfoComponent', () => {
  let component: IlrOrgInfoComponent;
  let fixture: ComponentFixture<IlrOrgInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IlrOrgInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IlrOrgInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
