import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3FirstCompComponent } from './module3-first-comp.component';

describe('Module3FirstCompComponent', () => {
  let component: Module3FirstCompComponent;
  let fixture: ComponentFixture<Module3FirstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3FirstCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
