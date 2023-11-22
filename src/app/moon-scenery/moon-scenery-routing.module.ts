import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoonSceneryPage } from './moon-scenery.page';

const routes: Routes = [
  {
    path: '',
    component: MoonSceneryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoonSceneryPageRoutingModule {}
