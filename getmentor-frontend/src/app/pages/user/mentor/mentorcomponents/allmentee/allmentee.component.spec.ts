import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllmenteeComponent } from './allmentee.component';

describe('AllmenteeComponent', () => {
  let component: AllmenteeComponent;
  let fixture: ComponentFixture<AllmenteeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllmenteeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllmenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
