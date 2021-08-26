import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../Recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Simply a test',
      'https://www.simplyrecipes.com/thmb/ZeUpv7mtCBnGm4cfhrIV85SYv3E=/1629x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-2-a4f6dc01259d413fb2a6cd49532ae966.jpg'
    ),
    new Recipe(
      'Test Recipe',
      'Simply a test',
      'https://www.simplyrecipes.com/thmb/ZeUpv7mtCBnGm4cfhrIV85SYv3E=/1629x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Simply-Recipes-Homemade-Pizza-LEAD-2-a4f6dc01259d413fb2a6cd49532ae966.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
