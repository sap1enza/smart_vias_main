import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastIncidentsPage } from './last-incidents.page';

const routes: Routes = [
  {
    path: '',
    component: LastIncidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastIncidentsPageRoutingModule {}
