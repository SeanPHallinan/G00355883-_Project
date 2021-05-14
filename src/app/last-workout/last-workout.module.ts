import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LastWorkoutPageRoutingModule } from './last-workout-routing.module';

import { LastWorkoutPage } from './last-workout.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LastWorkoutPageRoutingModule
  ],
  declarations: [LastWorkoutPage]
})
export class LastWorkoutPageModule {}
