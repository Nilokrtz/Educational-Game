import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorldsPageRoutingModule } from './worlds-routing.module';

import { WorldsPage } from './worlds.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorldsPageRoutingModule
  ],
  declarations: [WorldsPage]
})
export class WorldsPageModule {}
