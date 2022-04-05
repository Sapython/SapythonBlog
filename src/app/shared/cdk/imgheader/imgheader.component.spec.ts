import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgheaderComponent } from './imgheader.component';

describe('ImgheaderComponent', () => {
  let component: ImgheaderComponent;
  let fixture: ComponentFixture<ImgheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
