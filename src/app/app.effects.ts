import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map } from 'rxjs';
import {
  increaseCounter,
  decreaseCounter,
  clearCounter,
  changeUpdateTime,
} from './state/counter.actions';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {}

  updatedAt$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(increaseCounter, decreaseCounter, clearCounter),
        map(() => changeUpdateTime({ updatedAt: Date.now() }))
      ),
    { dispatch: true }
  );
}
