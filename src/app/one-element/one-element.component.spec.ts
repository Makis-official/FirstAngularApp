import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneElementComponent } from './one-element.component';

describe('OneElementComponent', () => {
  let component: OneElementComponent;
  let fixture: ComponentFixture<OneElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OneElementComponent]
    });
    fixture = TestBed.createComponent(OneElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
