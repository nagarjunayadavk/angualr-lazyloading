import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module1FirstCompComponent } from './first-module/module1-first-comp/module1-first-comp.component';


const routes: Routes = [
  // {path: '', component: Module1FirstCompComponent}
  {
    path: '',
    redirectTo: 'module1',
    pathMatch: 'full'
  },
  {
    path: 'module1',
    loadChildren: () => import('../app/first-module/first-module').then(m => m.FirstModule)
  },
  {
    path: 'module2',
    loadChildren: () => import('../app/second-module/second-module').then(m => m.SecondModule)
  },
  {
    path: 'module3',
    loadChildren: () => import('../app/third-module/third-module').then(m => m.ThirdModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
