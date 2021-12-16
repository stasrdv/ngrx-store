import {
  createAction,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';

export const increase = createAction('[COUNTER] increase');
export const decrease = createAction('[COUNTER] decrease');
export const clear = createAction('[COUNTER] clear');
export const changeUpdateTime = createAction(
  '[COUNTER] change last update time',
  props<{ updatedAt: number }>()
);

export interface CounterState {
  count: number;
  updatedAt?: number;
}
export const initialState: CounterState = {
  count: 0,
};
export const counterReducer = createReducer(
  initialState,
  on(increase, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decrease, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(clear, (state) => ({
    ...state,
    count: 0,
  })),
  on(changeUpdateTime, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt,
  }))
);

export const featureSelector = createFeatureSelector<CounterState>('counter');
export const counterSelector = createSelector(
  featureSelector,
  (state) => state.count
);
export const updatedAtSelector = createSelector(
  featureSelector,
  (state) => state.updatedAt
);
  


