import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmoviesfromexternalapiComponent } from './getmoviesfromexternalapi.component';

describe('GetmoviesfromexternalapiComponent', () => {
  let component: GetmoviesfromexternalapiComponent;
  let fixture: ComponentFixture<GetmoviesfromexternalapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetmoviesfromexternalapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetmoviesfromexternalapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
