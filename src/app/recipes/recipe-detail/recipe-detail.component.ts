import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Recipe } from '../Recipe.model';
import { RecipeService } from '../Recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  recipe!: Recipe;

  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnChanges() {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const recipe = this.recipeService
        .getRecipe()
        .find((recipe, index) => index === +params.id);
      if (recipe) this.recipe = recipe!;
      else this.router.navigate(['../0'], { relativeTo: this.route });
    });
  }

  sendToShoppingList() {
    this.slService.addIngredients(this.recipe.ingredients);
  }
}
