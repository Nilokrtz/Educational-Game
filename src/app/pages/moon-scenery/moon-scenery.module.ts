import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoonSceneryPageRoutingModule } from './moon-scenery-routing.module';

import { MoonSceneryPage } from './moon-scenery.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoonSceneryPageRoutingModule,
    SharedModule
  ],
  declarations: [MoonSceneryPage]
})
export class MoonSceneryPageModule {}
