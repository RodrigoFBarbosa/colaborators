import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColRegistrationComponent } from './col-registration.component';

describe('ColRegistrationComponent', () => {
  let component: ColRegistrationComponent;
  let fixture: ComponentFixture<ColRegistrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColRegistrationComponent]
    });
    fixture = TestBed.createComponent(ColRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
