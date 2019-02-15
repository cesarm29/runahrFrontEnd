import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsuserComponent } from './reportsuser.component';

describe('ReportsuserComponent', () => {
  let component: ReportsuserComponent;
  let fixture: ComponentFixture<ReportsuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
