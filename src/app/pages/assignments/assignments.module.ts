import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AssignmentsPageRoutingModule } from './assignments-routing.module';


@NgModule({
  imports: [
    CoreModule,
    AssignmentsPageRoutingModule
  ],
  declarations: []
})
export class AssignmentsPageModule {}
