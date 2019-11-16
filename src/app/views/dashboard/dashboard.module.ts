import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatCardModule
  ]
})
export class DashboardModule { }
