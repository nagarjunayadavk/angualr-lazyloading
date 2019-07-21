import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Module2FirstCompComponent } from './module2-first-comp/module2-first-comp.component';
import { Module2SecondCompComponent } from './module2-second-comp/module2-second-comp.component';



const routes: Routes = [
    {
        path: '',
        redirectTo: 'first',
        pathMatch: 'full'
    },
    {
        path: 'first',
        component: Module2FirstCompComponent
    },
    {
        path: 'second',
        component: Module2SecondCompComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecondRoutingModule { }