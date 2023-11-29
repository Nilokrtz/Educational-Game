import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiratesSceneryPageRoutingModule } from './pirates-scenery-routing.module';

import { PiratesSceneryPage } from './pirates-scenery.page';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    PiratesSceneryPageRoutingModule
  ],
  declarations: [PiratesSceneryPage]
})
export class PiratesSceneryPageModule {}
