import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindmentorComponent } from './findmentor.component';

describe('FindmentorComponent', () => {
  let component: FindmentorComponent;
  let fixture: ComponentFixture<FindmentorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindmentorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindmentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
