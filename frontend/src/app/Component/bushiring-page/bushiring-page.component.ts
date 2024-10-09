import { Component } from '@angular/core';

@Component({
  selector: 'app-bushiring-page',
  templateUrl: './bushiring-page.component.html',
  styleUrls: ['./bushiring-page.component.css']
})
export class BusHiringComponent {
  busSize: string = 'mini';  
  amenities = {
    ac: false,
    wifi: false,
    tv: false
  };
  route: string = '';

  hireBus() {
    const bookingDetails = {
      busSize: this.busSize,
      amenities: this.amenities,
      route: this.route
    };
    console.log('Booking details:', bookingDetails);
    alert('Bus booked successfully!');
  }
}
