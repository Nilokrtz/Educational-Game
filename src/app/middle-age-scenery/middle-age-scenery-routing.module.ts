import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MiddleAgeSceneryPage } from './middle-age-scenery.page';

const routes: Routes = [
  {
    path: '',
    component: MiddleAgeSceneryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MiddleAgeSceneryPageRoutingModule {}
