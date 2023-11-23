import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Level1Page } from './level1.page';

const routes: Routes = [
  {
    path: '',
    component: Level1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Level1PageRoutingModule {}
