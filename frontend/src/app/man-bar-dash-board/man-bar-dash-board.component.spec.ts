import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManBarDashBoardComponent } from './man-bar-dash-board.component';

describe('ManBarDashBoardComponent', () => {
  let component: ManBarDashBoardComponent;
  let fixture: ComponentFixture<ManBarDashBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ManBarDashBoardComponent]
    });
    fixture = TestBed.createComponent(ManBarDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
