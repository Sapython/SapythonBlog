import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnsRefundsComponent } from './returns-refunds.component';

describe('ReturnsRefundsComponent', () => {
  let component: ReturnsRefundsComponent;
  let fixture: ComponentFixture<ReturnsRefundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReturnsRefundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnsRefundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
