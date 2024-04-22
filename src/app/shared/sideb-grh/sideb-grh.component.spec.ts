import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebGRHComponent } from './sideb-grh.component';

describe('SidebGRHComponent', () => {
  let component: SidebGRHComponent;
  let fixture: ComponentFixture<SidebGRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebGRHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebGRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
