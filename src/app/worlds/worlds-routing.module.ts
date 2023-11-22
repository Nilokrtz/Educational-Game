import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorldsPage } from './worlds.page';

const routes: Routes = [
  {
    path: '',
    component: WorldsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorldsPageRoutingModule {}
