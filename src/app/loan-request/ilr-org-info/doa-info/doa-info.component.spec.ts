import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoaInfoComponent } from './doa-info.component';

describe('DoaInfoComponent', () => {
  let component: DoaInfoComponent;
  let fixture: ComponentFixture<DoaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoaInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
