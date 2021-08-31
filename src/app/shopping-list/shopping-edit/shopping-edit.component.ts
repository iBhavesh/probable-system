import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('f', { static: false })
  form!: NgForm;
  editMode = false;
  editableItem!: number;
  startEdit!: Subscription;

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.startEdit = this.slService.startEditing.subscribe((index) => {
      this.editMode = true;
      this.editableItem = index;
      const item = this.slService.getIngredient(index);
      this.form.form.setValue({
        name: item.name,
        amount: item.amount,
      });
    });
  }

  onFormSubmit() {
    console.log('submit');

    const name = <string>this.form.value.name;
    const amount = <string>this.form.value.amount;
    const ingredient = new Ingredient(name, +amount);
    if (this.editMode)
      this.slService.updateIngredient(this.editableItem, ingredient);
    else this.slService.addIngredient(ingredient);
    this.onFormClear();
  }

  onFormClear() {
    this.form.form.patchValue({ name: '', amount: 1 });
    console.log('clear');

    this.editMode = false;
  }

  onDelete() {
    this.slService.deleteIngredient(this.editableItem);
    this.onFormClear();
  }

  ngOnDestroy() {
    this.startEdit.unsubscribe();
  }
}
