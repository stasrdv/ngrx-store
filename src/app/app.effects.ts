import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { createEffects } from '@ngrx/effects/src/effects_module';
import { map } from 'rxjs';
import {
  clear,
  increase,
  decrease,
  changeUpdateTime,
} from './reducers/counter';

@Injectable()
export class AppEffects {
  constructor(private actions: Actions) {}

  updatedAt$ = createEffect(
    () =>
      this.actions.pipe(
        ofType(increase, decrease, clear),
        map(() => changeUpdateTime({ updatedAt: Date.now() }))
      ),
    { dispatch: true }
  );
}
