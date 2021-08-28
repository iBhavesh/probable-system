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
  recipe: Recipe | null | undefined;
  id!: number;

  constructor(
    private slService: ShoppingListService,
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnChanges() {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      const recipe = this.recipeService.getRecipe(this.id);
      if (recipe) this.recipe = recipe!;
      else this.router.navigate(['../0'], { relativeTo: this.route });
    });
  }

  sendToShoppingList() {
    if (this.recipe) this.slService.addIngredients(this.recipe.ingredients);
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['..'], { relativeTo: this.route });
  }
}
