import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeComponent } from './time/time.component';
import { ScheduleComponent } from './schedule/schedule.component';


const routes: Routes = [
  { path: '', component: TimeComponent },
  { path: 'time', component: TimeComponent },
  { path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
