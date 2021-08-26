import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  selectedPage: 'recipes' | 'shopping-list' = 'recipes';

  onSelectPage(page: 'recipes' | 'shopping-list') {
    this.selectedPage = page;
  }
}
