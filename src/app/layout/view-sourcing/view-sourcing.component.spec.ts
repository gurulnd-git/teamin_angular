import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSourcingComponent } from './view-sourcing.component';

describe('ViewSourcingComponent', () => {
  let component: ViewSourcingComponent;
  let fixture: ComponentFixture<ViewSourcingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSourcingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
