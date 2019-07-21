import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3SecondCompComponent } from './module3-second-comp.component';

describe('Module3SecondCompComponent', () => {
  let component: Module3SecondCompComponent;
  let fixture: ComponentFixture<Module3SecondCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module3SecondCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module3SecondCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
