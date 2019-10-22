import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { EventAppComponent } from './events-app.component';
import { EventslistComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { ToastrService } from './common/toastr.service';
import { EventDetailsComponent } from './events/event-details/events-details.component';
import { appRoutes } from './routes';
import { CreateEventComponent } from './create-event.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    EventDetailsComponent,
    EventAppComponent,
    EventslistComponent,
    EventThumbnailComponent,
    CreateEventComponent,
    NavBarComponent
  ],
  providers: [EventService, ToastrService],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
