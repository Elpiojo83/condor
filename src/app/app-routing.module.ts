import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProjectComponent} from './components/project/project.component';
import {UserComponent} from './components/user/user.component';
import {TimeEntryComponent} from './components/time-entry/time-entry.component';

const routes: Routes = [
  {path: '', component: ProjectComponent},
  {path: 'user', component: UserComponent},
  {path: 'time-entries', component: TimeEntryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
