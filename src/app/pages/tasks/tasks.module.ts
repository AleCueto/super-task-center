import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { TasksPageRoutingModule } from './tasks-routing.module';

@NgModule({
  imports: [
    CoreModule,
    TasksPageRoutingModule
  ],
  declarations: []
})
export class TasksPageModule {}
