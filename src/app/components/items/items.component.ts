import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
    selector: 'app-items',
    templateUrl: './items.component.html',
    styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

    items: Item[] = [];
    total:number = 0;

    constructor(private itemService:ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems(),

        this.getTotal();
    }
    
    deleteItem(item: Item){
        this.items = this.items.filter(x => x.id != item.id);
        this.getTotal();
    }

    toggleItem(item: Item){
        item.completed = !item.completed;
        this.getTotal();
    }

    getTotal(){
        this.total = this.items
            .filter(item => ! !item.completed)
            .map(item => item.quantity * item.price)
            .reduce( (acc, item) => acc += item, 0);
    }

}
