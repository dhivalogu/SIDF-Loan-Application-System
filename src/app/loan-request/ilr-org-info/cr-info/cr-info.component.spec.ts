import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrInfoComponent } from './cr-info.component';

describe('CrInfoComponent', () => {
  let component: CrInfoComponent;
  let fixture: ComponentFixture<CrInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
