import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput', { static: false })
  amountInputRef!: ElementRef<HTMLInputElement>;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem(event: MouseEvent) {
    event.preventDefault();
    const name = this.nameInputRef.nativeElement.value;
    if (name.length === 0) return;
    this.ingredientAdded.emit(
      new Ingredient(name, +this.amountInputRef.nativeElement.value)
    );
  }
}
