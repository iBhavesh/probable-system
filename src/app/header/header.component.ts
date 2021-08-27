import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Input() path: 'recipes' | 'shopping-list' = 'recipes';
  @Output() pathChange = new EventEmitter<'recipes' | 'shopping-list'>();

  onSelect(path: 'recipes' | 'shopping-list') {
    this.pathChange.emit(path);
  }
}
