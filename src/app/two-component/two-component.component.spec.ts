import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoComponentComponent } from './two-component.component';

describe('TwoComponentComponent', () => {
  let component: TwoComponentComponent;
  let fixture: ComponentFixture<TwoComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwoComponentComponent]
    });
    fixture = TestBed.createComponent(TwoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
