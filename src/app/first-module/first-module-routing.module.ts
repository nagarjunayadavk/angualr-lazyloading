import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1FirstCompComponent } from './module1-first-comp/module1-first-comp.component';
import { Module1SecondCompComponent } from './module1-second-comp/module1-second-comp.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'first',
    pathMatch: 'full'
  },
  {
    path: 'first',
    component: Module1FirstCompComponent
  },
  {
    path: 'second',
    component: Module1SecondCompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FirstModuleRouting { }