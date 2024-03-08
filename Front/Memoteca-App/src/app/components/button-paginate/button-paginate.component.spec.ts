import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonPaginateComponent } from './button-paginate.component';

describe('ButtonPaginateComponent', () => {
  let component: ButtonPaginateComponent;
  let fixture: ComponentFixture<ButtonPaginateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonPaginateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonPaginateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
