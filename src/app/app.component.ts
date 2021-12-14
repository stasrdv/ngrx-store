import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { clear, counterSelector, decrease, increase } from './reducers/counter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  updatedAt: number | undefined;
  count$ = this.store.select(counterSelector);

  constructor(private store: Store) {}

  clear() {
    this.store.dispatch(clear());
  }

  increase() {
    this.setDate();
    this.store.dispatch(increase());
  }

  decrease() {
    this.setDate();
    this.store.dispatch(decrease());
  }

  private setDate(): void {
    this.updatedAt = Date.now();
  }
}
