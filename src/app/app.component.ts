import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import {
  clear,
  counterSelector,
  decrease,
  increase,
  updatedAtSelector,
} from './reducers/counter';

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
    this.store.dispatch(clear());
  }

  increase() {
    this.store.dispatch(increase());
  }

  decrease() {
    this.store.dispatch(decrease());
  }
}
