import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorCarouselComponent } from './mentor-carousel.component';

describe('MentorCarouselComponent', () => {
  let component: MentorCarouselComponent;
  let fixture: ComponentFixture<MentorCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MentorCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
