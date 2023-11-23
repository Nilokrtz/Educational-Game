import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrehistoricSceneryPage } from './prehistoric-scenery.page';

const routes: Routes = [
  {
    path: '',
    component: PrehistoricSceneryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrehistoricSceneryPageRoutingModule {}
