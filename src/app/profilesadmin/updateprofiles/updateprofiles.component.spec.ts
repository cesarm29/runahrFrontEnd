import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateprofilesComponent } from './updateprofiles.component';

describe('UpdateprofilesComponent', () => {
  let component: UpdateprofilesComponent;
  let fixture: ComponentFixture<UpdateprofilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateprofilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateprofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
