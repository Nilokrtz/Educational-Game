import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSelectionPageRoutingModule } from './level-selection-routing.module';

import { LevelSelectionPage } from './level-selection.page';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSelectionPageRoutingModule
  ],
  declarations: [LevelSelectionPage]
})
export class LevelSelectionPageModule {}
