import { createAction, props } from '@ngrx/store';

export const increaseCounter = createAction('[COUNTER] increase');
export const decreaseCounter = createAction('[COUNTER] decrease');
export const clearCounter = createAction('[COUNTER] clear');
export const changeUpdateTime = createAction(
  '[COUNTER] change last update time',
  props<{ updatedAt: number }>()
);
