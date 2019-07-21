import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Module2SecondCompComponent } from './module2-second-comp/module2-second-comp.component';
import { Module2FirstCompComponent } from './module2-first-comp/module2-first-comp.component';
import { SecondRoutingModule } from './second-module-routing.module';



@NgModule({
  declarations: [Module2SecondCompComponent, Module2FirstCompComponent],
  imports: [
    CommonModule,
    SecondRoutingModule
  ]
})
export class SecondModule { }
