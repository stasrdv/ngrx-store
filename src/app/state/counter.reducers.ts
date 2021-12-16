import {
  createReducer,
  on,
} from '@ngrx/store';
import { increaseCounter, decreaseCounter, clearCounter, changeUpdateTime } from './counter.actions';



export interface CounterState {
  count: number;
  updatedAt?: number;
}
export const initialState: CounterState = {
  count: 0,
};
export const counterReducer = createReducer(
  initialState,
  on(increaseCounter, (state) => ({
    ...state,
    count: state.count + 1,
  })),
  on(decreaseCounter, (state) => ({
    ...state,
    count: state.count - 1,
  })),
  on(clearCounter, (state) => ({
    ...state,
    count: 0,
  })),
  on(changeUpdateTime, (state, action) => ({
    ...state,
    updatedAt: action.updatedAt,
  }))
);




