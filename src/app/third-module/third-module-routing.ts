import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module3SecondCompComponent } from './module3-second-comp/module3-second-comp.component';
import { Module3FirstCompComponent } from './module3-first-comp/module3-first-comp.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
    },
    {
        path: 'first',
        component: Module3FirstCompComponent
    },
    {
        path: 'second',
        component: Module3SecondCompComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ThirdRoutingModule { }