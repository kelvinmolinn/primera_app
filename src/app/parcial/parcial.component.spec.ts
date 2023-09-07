import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcialComponent } from './parcial.component';

describe('ParcialComponent', () => {
  let component: ParcialComponent;
  let fixture: ComponentFixture<ParcialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParcialComponent]
    });
    fixture = TestBed.createComponent(ParcialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
