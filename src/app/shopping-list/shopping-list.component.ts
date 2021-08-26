import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 2),
    new Ingredient('Apples', 3),
    new Ingredient('Pineapple slice', 1),
  ];

  constructor() {}

  ngOnInit(): void {}
}
