import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items:Item[] = [
    {
      id: 1,
      title: 'manzana',
      price: 10.5,
      quantity: 4,
      completed: false,
    },
    {
      id: 2,
      title: 'pan',
      price: 3.8,
      quantity: 5,
      completed: false,
    },
    {
      id: 3,
      title: 'uvas',
      price: 13.8,
      quantity: 10,
      completed: false,
    },
    {
      id: 4,
      title: 'mantequilla',
      price: 22,
      quantity: 1,
      completed: false,
    },
    {
      id: 5,
      title: 'spaguetti',
      price: 5.3,
      quantity: 3,
      completed: false,
    },
    {
      id: 6,
      title: 'hamburguesa',
      price: 50.8,
      quantity: 5,
      completed: false,
    }
  ];

  constructor() { }

  getItems(){
    return this.items;
  }

  addItem(item:Item){
    this.items.unshift(item);
  }

}
