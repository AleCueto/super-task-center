import { HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { CoreModule } from 'src/app/core/core.module';
import { createTranslateLoader } from 'src/app/core/utils/translate';
import { PersonsPageRoutingModule } from './persons-routing.module';

@NgModule({
  imports: [
    CoreModule,
    PersonsPageRoutingModule,
    TranslateModule.forChild({
      loader: {
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [HttpClient]
      }
      }),
  ],
  declarations: []
})
export class PersonsPageModule {}
