import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module3FirstCompComponent } from './module3-first-comp/module3-first-comp.component';
import { Module3SecondCompComponent } from './module3-second-comp/module3-second-comp.component';
import { ThirdRoutingModule } from './third-module-routing';



@NgModule({
  declarations: [Module3FirstCompComponent, Module3SecondCompComponent],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ]
})
export class ThirdModule { }
