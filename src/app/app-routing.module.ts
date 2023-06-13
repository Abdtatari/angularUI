import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryTableComponent } from './history-table/history-table.component';
import { ComponentTableComponent } from './component-table/component-table.component';

const routes: Routes = [
  { path : '' ,component : ComponentTableComponent},
  { path: 'history', component: HistoryTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
