import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrehistoricSceneryPageRoutingModule } from './prehistoric-scenery-routing.module';

import { PrehistoricSceneryPage } from './prehistoric-scenery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrehistoricSceneryPageRoutingModule
  ],
  declarations: [PrehistoricSceneryPage]
})
export class PrehistoricSceneryPageModule {}
