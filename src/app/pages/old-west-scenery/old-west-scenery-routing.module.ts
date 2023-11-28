import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OldWestSceneryPage } from './old-west-scenery.page';

const routes: Routes = [
  {
    path: '',
    component: OldWestSceneryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OldWestSceneryPageRoutingModule {}
