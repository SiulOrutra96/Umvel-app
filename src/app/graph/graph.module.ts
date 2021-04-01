import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
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
    ChartsModule,
    MatProgressSpinnerModule
  ]
})
export class GraphModule { }
