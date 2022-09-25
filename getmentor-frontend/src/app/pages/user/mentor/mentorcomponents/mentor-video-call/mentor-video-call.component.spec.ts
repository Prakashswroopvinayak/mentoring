import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorVideoCallComponent } from './mentor-video-call.component';

describe('MentorVideoCallComponent', () => {
  let component: MentorVideoCallComponent;
  let fixture: ComponentFixture<MentorVideoCallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorVideoCallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorVideoCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
