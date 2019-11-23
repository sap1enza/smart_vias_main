import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReportWorkPageRoutingModule } from './report-work-routing.module';

import { ReportWorkPage } from './report-work.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReportWorkPageRoutingModule
  ],
  declarations: [ReportWorkPage]
})
export class ReportWorkPageModule {}
