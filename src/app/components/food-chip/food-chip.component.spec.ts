import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodChipComponent } from './food-chip.component';

describe('FoodChipComponent', () => {
  let component: FoodChipComponent;
  let fixture: ComponentFixture<FoodChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodChipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
