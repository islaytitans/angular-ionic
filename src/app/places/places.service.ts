import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In downtown New York City',
      'https://images.unsplash.com/photo-1546436836-07a91091f160?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
      149.99),
    new Place(
      'p2',
      'Fawlty Towers',
      'Come for the countryside leave for the service',
      'https://pix10.agoda.net/hotelImages/237/237219/237219_16061614410043650820.jpg?s=312x235&ar=16x9',
      49.99),
    new Place(
      'p3',
      'Madame Fromage',
      'Get the best service with the best yohurt',
      'https://pix10.agoda.net/hotelImages/5607639/0/50cbcccae83ea97e4ce60ba1913ffda5.jpg?s=312x235&ar=16x9',
      80.00),
  ];

  get places() {
    return [...this._places];
  }

  constructor() { }
}
