import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSelectionPageRoutingModule } from './level-selection-routing.module';

import { LevelSelectionPage } from './level-selection.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSelectionPageRoutingModule
  ],
  declarations: [LevelSelectionPage]
})
export class LevelSelectionPageModule {}
