import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeerozComponent } from './feeroz.component';

describe('FeerozComponent', () => {
  let component: FeerozComponent;
  let fixture: ComponentFixture<FeerozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeerozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeerozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
