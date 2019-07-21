import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1FirstCompComponent } from './module1-first-comp.component';

describe('Module1FirstCompComponent', () => {
  let component: Module1FirstCompComponent;
  let fixture: ComponentFixture<Module1FirstCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module1FirstCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module1FirstCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
