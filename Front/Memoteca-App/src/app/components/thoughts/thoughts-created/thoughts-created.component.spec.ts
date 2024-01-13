import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoughtsCreatedComponent } from './thoughts-created.component';

describe('ThoughtsCreatedComponent', () => {
  let component: ThoughtsCreatedComponent;
  let fixture: ComponentFixture<ThoughtsCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThoughtsCreatedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThoughtsCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
