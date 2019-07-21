import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1SecondCompComponent } from './module1-second-comp.component';

describe('Module1SecondCompComponent', () => {
  let component: Module1SecondCompComponent;
  let fixture: ComponentFixture<Module1SecondCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1SecondCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1SecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
