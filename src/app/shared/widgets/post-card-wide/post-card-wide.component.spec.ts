import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCardWideComponent } from './post-card-wide.component';

describe('PostCardComponent', () => {
  let component: PostCardWideComponent;
  let fixture: ComponentFixture<PostCardWideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostCardWideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCardWideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
