import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadmoviesComponent } from './loadmovies.component';

describe('LoadmoviesComponent', () => {
  let component: LoadmoviesComponent;
  let fixture: ComponentFixture<LoadmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadmoviesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
