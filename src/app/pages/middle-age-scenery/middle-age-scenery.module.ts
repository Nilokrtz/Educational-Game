import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MiddleAgeSceneryPageRoutingModule } from './middle-age-scenery-routing.module';

import { MiddleAgeSceneryPage } from './middle-age-scenery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MiddleAgeSceneryPageRoutingModule
  ],
  declarations: [MiddleAgeSceneryPage]
})
export class MiddleAgeSceneryPageModule {}
