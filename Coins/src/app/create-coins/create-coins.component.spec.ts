import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCoinsComponent } from './create-coins.component';

describe('CreateCoinsComponent', () => {
  let component: CreateCoinsComponent;
  let fixture: ComponentFixture<CreateCoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCoinsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
