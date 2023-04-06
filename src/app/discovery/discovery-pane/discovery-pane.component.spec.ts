import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscoveryPaneComponent } from './discovery-pane.component';

describe('DiscoveryPaneComponent', () => {
  let component: DiscoveryPaneComponent;
  let fixture: ComponentFixture<DiscoveryPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscoveryPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscoveryPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
