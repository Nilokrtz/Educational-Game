import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiratesSceneryPage } from './pirates-scenery.page';

const routes: Routes = [
  {
    path: '',
    component: PiratesSceneryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiratesSceneryPageRoutingModule {}
