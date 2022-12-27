import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostingComponent } from './add-costing.component';

describe('AddCostingComponent', () => {
  let component: AddCostingComponent;
  let fixture: ComponentFixture<AddCostingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCostingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
