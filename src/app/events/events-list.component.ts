import { Component } from "@angular/core";


@Component({
  selector: 'events-list',
  templateUrl: './events-list.component.html',

})
export class EventslistComponent {
  event = {
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
