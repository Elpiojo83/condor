import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectComponent } from './components/project/project.component';
import { UserComponent } from './components/user/user.component';
import { TimeEntryComponent } from './components/time-entry/time-entry.component';
import {FormsModule} from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    UserComponent,
    TimeEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
