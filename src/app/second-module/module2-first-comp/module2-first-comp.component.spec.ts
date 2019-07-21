import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2FirstCompComponent } from './module2-first-comp.component';

describe('Module2FirstCompComponent', () => {
  let component: Module2FirstCompComponent;
  let fixture: ComponentFixture<Module2FirstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module2FirstCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module2FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
