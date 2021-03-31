import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { GraphComponent } from './graph.component';

const routes: Routes = [
  { path: '', component: GraphComponent }
]

@NgModule({
  declarations: [
    GraphComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ChartsModule
  ]
})
export class GraphModule { }
