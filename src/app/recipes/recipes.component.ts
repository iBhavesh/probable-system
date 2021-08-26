import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: null | Recipe = null;

  constructor() {}

  ngOnInit(): void {}

  selectRecipe(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
