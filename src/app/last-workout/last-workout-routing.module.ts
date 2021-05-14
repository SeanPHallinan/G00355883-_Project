import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LastWorkoutPage } from './last-workout.page';

const routes: Routes = [
  {
    path: '',
    component: LastWorkoutPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LastWorkoutPageRoutingModule {}
