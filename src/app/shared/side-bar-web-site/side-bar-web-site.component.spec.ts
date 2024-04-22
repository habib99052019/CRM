import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarWebSiteComponent } from './side-bar-web-site.component';

describe('SideBarWebSiteComponent', () => {
  let component: SideBarWebSiteComponent;
  let fixture: ComponentFixture<SideBarWebSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarWebSiteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideBarWebSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
