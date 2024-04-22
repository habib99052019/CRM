import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSteComponent } from './web-ste.component';

describe('WebSteComponent', () => {
  let component: WebSteComponent;
  let fixture: ComponentFixture<WebSteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
