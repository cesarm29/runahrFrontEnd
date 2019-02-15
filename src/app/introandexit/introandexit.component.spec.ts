import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroandexitComponent } from './introandexit.component';

describe('IntroandexitComponent', () => {
  let component: IntroandexitComponent;
  let fixture: ComponentFixture<IntroandexitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroandexitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroandexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
