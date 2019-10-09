import { Component } from "@angular/core";


@Component({
  selector: 'events-list',
  template: `
  <div>
  <h1>Upcoming Angular Events</h1>
  <hr />
  <event-thumbnail #thumbnail [event]="eventDetails"></event-thumbnail>
  <h3>{{  thumbnail.someProperty}}</h3>
  <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log Foo Method</button>
</div>
  `,

})
export class EventslistComponent {
  eventDetails = {
    id: 1,
    name: 'Angular Connect',
    date: '9/26/2036',
    time: '10:00am',
    price: '599.96',
    imageUrl: '/assets/images/angularconnect-shield.png',
    location: {
      address: '1057 DT',
      city: 'London',
      country: 'England'
    }
  }
}
