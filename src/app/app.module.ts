import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './events-app.component';
import { EventslistComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    EventslistComponent,
    EventThumbnailComponent
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
