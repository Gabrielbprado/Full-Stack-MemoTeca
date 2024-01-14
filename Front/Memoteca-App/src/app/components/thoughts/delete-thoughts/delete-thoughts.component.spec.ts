import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteThoughtsComponent } from './delete-thoughts.component';

describe('DeleteThoughtsComponent', () => {
  let component: DeleteThoughtsComponent;
  let fixture: ComponentFixture<DeleteThoughtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteThoughtsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
