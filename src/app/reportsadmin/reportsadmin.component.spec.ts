import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsadminComponent } from './reportsadmin.component';

describe('ReportsadminComponent', () => {
  let component: ReportsadminComponent;
  let fixture: ComponentFixture<ReportsadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
