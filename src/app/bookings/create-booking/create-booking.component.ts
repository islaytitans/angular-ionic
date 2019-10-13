import { Component, OnInit, Input } from '@angular/core';
import { Place } from 'src/app/places/place.model';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
@Input() selectedPlace: Place;

  constructor(private modalController: ModalController) { }

  ngOnInit() {}


  onCancel() {
    this.modalController.dismiss(null, 'cancel', 'bookingModal');
  }

  onBookPlace() {
    this.modalController.dismiss({message: 'Booked!'}, 'book', 'bookingModal');
  }
}
