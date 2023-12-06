import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BookComponent } from '../component/book/book.component';
import { ResultComponent } from '../component/result/result.component';
import { SettingsComponent } from '../component/settings/settings.component';
import { ChoicesComponent } from '../component/choices/choices.component';
import { InteractionComponent } from '../component/interaction/interaction.component';
import { ConclusionComponent } from '../component/conclusion/conclusion.component';

@NgModule({
  imports: [IonicModule],
  declarations: [
    BookComponent,
    ResultComponent,
    ChoicesComponent,
    SettingsComponent,
    InteractionComponent,
    ConclusionComponent
  ],
  exports: [
    BookComponent,
    ResultComponent,
    ChoicesComponent,
    SettingsComponent,
    InteractionComponent,
    ConclusionComponent
  ],
})
export class SharedModule {}
