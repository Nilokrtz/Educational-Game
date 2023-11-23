import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoonSceneryPageRoutingModule } from './moon-scenery-routing.module';

import { MoonSceneryPage } from './moon-scenery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoonSceneryPageRoutingModule
  ],
  declarations: [MoonSceneryPage]
})
export class MoonSceneryPageModule {}
