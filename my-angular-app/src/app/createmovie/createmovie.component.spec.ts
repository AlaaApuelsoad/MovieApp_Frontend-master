import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatemovieComponent } from './createmovie.component';

describe('CreatemovieComponent', () => {
  let component: CreatemovieComponent;
  let fixture: ComponentFixture<CreatemovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatemovieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatemovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
