import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../Recipe.model';
import { RecipeService } from '../../Recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe!: Recipe;
  @Input() index!: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onSelectRecipe() {
    this.router.navigate([this.index], { relativeTo: this.route });
  }
}
