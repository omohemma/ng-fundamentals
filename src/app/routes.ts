import { Routes } from "@angular/router";
import { EventslistComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-details/events-details.component';
import { CreateEventComponent } from './create-event.component';

export const appRoutes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventslistComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: 'events', pathMatch: 'full' }
]
