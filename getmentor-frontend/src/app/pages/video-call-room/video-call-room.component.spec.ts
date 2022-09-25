import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoCallRoomComponent } from './video-call-room.component';

describe('VideoCallRoomComponent', () => {
  let component: VideoCallRoomComponent;
  let fixture: ComponentFixture<VideoCallRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoCallRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoCallRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
