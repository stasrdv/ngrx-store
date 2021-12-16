import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { clearCounter, decreaseCounter, increaseCounter } from './state/counter.actions';
import { counterSelector, updatedAtSelector } from './state/counter.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  count$ = this.store.select(counterSelector);
  updatedAt$ = this.store.select(updatedAtSelector);

  isDecreaseDisabled = this.count$.pipe(map((count) => count <= 0));

  constructor(private store: Store,) {}

  clear() {
    this.store.dispatch(clearCounter());
  }

  increase() {
    this.store.dispatch(increaseCounter());
  }

  decrease() {
    this.store.dispatch(decreaseCounter());
  }
}
