import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabEmployersComponent } from './tab-employers.component';

describe('TabEmployersComponent', () => {
  let component: TabEmployersComponent;
  let fixture: ComponentFixture<TabEmployersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabEmployersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabEmployersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
