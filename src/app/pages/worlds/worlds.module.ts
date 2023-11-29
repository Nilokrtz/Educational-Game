import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldsPageRoutingModule } from './worlds-routing.module';

import { WorldsPage } from './worlds.page';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldsPageRoutingModule,
    SharedModule
  ],
  declarations: [WorldsPage]
})
export class WorldsPageModule {}
