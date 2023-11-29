import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OldWestSceneryPageRoutingModule } from './old-west-scenery-routing.module';

import { OldWestSceneryPage } from './old-west-scenery.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    OldWestSceneryPageRoutingModule
  ],
  declarations: [OldWestSceneryPage]
})
export class OldWestSceneryPageModule {}
