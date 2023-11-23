import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LevelSelectionPage } from './level-selection.page';

const routes: Routes = [
  {
    path: '',
    component: LevelSelectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LevelSelectionPageRoutingModule {}
