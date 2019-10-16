import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './events-app.component';
import { EventslistComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    EventslistComponent,
    EventThumbnailComponent,
    NavBarComponent
  ],
  providers: [EventService],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
