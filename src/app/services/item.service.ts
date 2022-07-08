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
      completed: true,
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
