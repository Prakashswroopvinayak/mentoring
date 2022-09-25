import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMentorComponent } from './view-mentor.component';

describe('ViewMentorComponent', () => {
  let component: ViewMentorComponent;
  let fixture: ComponentFixture<ViewMentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewMentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
