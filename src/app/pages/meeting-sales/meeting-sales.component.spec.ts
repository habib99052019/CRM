import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSalesComponent } from './meeting-sales.component';

describe('MeetingSalesComponent', () => {
  let component: MeetingSalesComponent;
  let fixture: ComponentFixture<MeetingSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeetingSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
