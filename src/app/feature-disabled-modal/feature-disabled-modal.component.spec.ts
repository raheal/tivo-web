import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureDisabledModalComponent } from './feature-disabled-modal.component';

describe('FeatureDisabledModalComponent', () => {
  let component: FeatureDisabledModalComponent;
  let fixture: ComponentFixture<FeatureDisabledModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeatureDisabledModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureDisabledModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
