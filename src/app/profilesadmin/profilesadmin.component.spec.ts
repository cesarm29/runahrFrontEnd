import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesadminComponent } from './profilesadmin.component';

describe('ProfilesadminComponent', () => {
  let component: ProfilesadminComponent;
  let fixture: ComponentFixture<ProfilesadminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilesadminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
