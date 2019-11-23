import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastIncidentsPageRoutingModule } from './last-incidents-routing.module';

import { LastIncidentsPage } from './last-incidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastIncidentsPageRoutingModule
  ],
  declarations: [LastIncidentsPage]
})
export class LastIncidentsPageModule {}
