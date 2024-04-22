import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLeadsAncienComponent } from './table-leads-ancien.component';

describe('TableLeadsAncienComponent', () => {
  let component: TableLeadsAncienComponent;
  let fixture: ComponentFixture<TableLeadsAncienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableLeadsAncienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableLeadsAncienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
