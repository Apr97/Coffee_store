import { Component, OnInit } from '@angular/core';
import { Coffee } from 'src/app/shared/interfaces/coffee.interface';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.scss']
})
export class CoffeeListComponent implements OnInit {
  public coffees: Coffee[] =[];
  constructor() { }

  ngOnInit(): void {
    this.coffees=[
      {id:1,name:'americano-with-milk',volume:'2', price:10,image:"americano-with-milk.webp"},
      {id:2,name:'americano',volume:'1', price:40,image:"americano.webp"},
      {id:3,name:'cappuccino',volume:'5', price:60,image:"cappuccino.webp"},
      {id:4,name:'espresso',volume:'4', price:40,image:"espresso.webp"},
      {id:5,name:'latte',volume:'2', price:40,image:"latte.webp"}
    ]

  }
  public handleClick(productName: string): void {
    
  }

}
