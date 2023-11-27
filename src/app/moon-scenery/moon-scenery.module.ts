import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoonSceneryPageRoutingModule } from './moon-scenery-routing.module';

import { MoonSceneryPage } from './moon-scenery.page';

import { ChoicesComponent } from '../choices/choices.component';
import { ResultComponent } from '../result/result.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoonSceneryPageRoutingModule
  ],
  declarations: [MoonSceneryPage, ChoicesComponent, ResultComponent]
})
export class MoonSceneryPageModule {}
