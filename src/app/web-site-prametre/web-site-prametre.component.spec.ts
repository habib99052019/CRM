import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebSitePrametreComponent } from './web-site-prametre.component';

describe('WebSitePrametreComponent', () => {
  let component: WebSitePrametreComponent;
  let fixture: ComponentFixture<WebSitePrametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebSitePrametreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebSitePrametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
