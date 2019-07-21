import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module1FirstCompComponent } from './module1-first-comp/module1-first-comp.component';
import { Module1SecondCompComponent } from './module1-second-comp/module1-second-comp.component';
import { FirstModuleRouting } from './first-module-routing.module';



@NgModule({
  declarations: [Module1FirstCompComponent, Module1SecondCompComponent],
  imports: [
    CommonModule,
    FirstModuleRouting
  ]
})
export class FirstModule { }
