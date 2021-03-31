import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users.component';


const routes: Routes = [
  { path: '', component: UsersComponent }
]

@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ]
})
export class UsersModule { }
