import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

  items: Item[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
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
    ]
  }
  
  deleteItem(item: Item){
    this.items = this.items.filter(x => x.id != item.id);
  }

  onToggle(item: Item){
    item.completed = !item.completed;
  }

}
