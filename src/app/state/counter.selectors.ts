import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.reducers";

export const featureSelector = createFeatureSelector<CounterState>('counter');
export const counterSelector = createSelector(
  featureSelector,
  (state) => state.count
);
export const updatedAtSelector = createSelector(
  featureSelector,
  (state) => state.updatedAt
);
