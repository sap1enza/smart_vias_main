import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportWorkPage } from './report-work.page';

const routes: Routes = [
  {
    path: '',
    component: ReportWorkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportWorkPageRoutingModule {}
