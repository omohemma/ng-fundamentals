import { Component } from "@angular/core";


@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="well hover thumbnail">
        <h2>{{event.name}}</h2>
        <div> Date: {{}}</div>
        <div> Time: {{}}</div>
        <div> Price: {{}}</div>
        <div> </div>
        
        </div>
     
    </div>
    `,

})
export class EventslistComponent {
    event = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00am',
        price: '599.96',
        imageUrl: '/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city:'London',
            country:'England'
        }
    }

}