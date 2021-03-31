import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    CommonModule
  ]
})
export class GraphModule { }
