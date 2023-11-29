import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { BookComponent } from '../component/book/book.component';
import { ResultComponent } from '../component/result/result.component';
import { SettingsComponent } from '../component/settings/settings.component';
import { ChoicesComponent } from '../component/choices/choices.component';

@NgModule({
  imports: [IonicModule],
  declarations: [
    BookComponent,
    ResultComponent,
    ChoicesComponent,
    SettingsComponent
  ],
  exports: [
    BookComponent,
    ResultComponent,
    ChoicesComponent,
    SettingsComponent
  ],
})
export class SharedModule {}
