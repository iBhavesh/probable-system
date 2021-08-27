import { Component, OnInit } from '@angular/core';
import { Recipe } from './Recipe.model';
import { RecipeService } from './Recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  selectedRecipe: null | Recipe = null;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe) => {
      this.selectedRecipe = recipe;
    });
  }
}
