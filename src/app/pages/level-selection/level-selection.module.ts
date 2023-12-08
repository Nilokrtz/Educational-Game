import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LevelSelectionPageRoutingModule } from './level-selection-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { LevelSelectionPage } from './level-selection.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LevelSelectionPageRoutingModule,
    SharedModule
  ],
  declarations: [LevelSelectionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LevelSelectionPageModule {}
