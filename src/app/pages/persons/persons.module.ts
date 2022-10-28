import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PersonsPageRoutingModule } from './persons-routing.module';

@NgModule({
  imports: [
    CoreModule,
    PersonsPageRoutingModule
  ],
  declarations: []
})
export class PersonsPageModule {}
