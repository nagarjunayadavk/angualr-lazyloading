import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2SecondCompComponent } from './module2-second-comp.component';

describe('Module2SecondCompComponent', () => {
  let component: Module2SecondCompComponent;
  let fixture: ComponentFixture<Module2SecondCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2SecondCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2SecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
