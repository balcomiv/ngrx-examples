import { createFeatureSelector, createSelector } from '@ngrx/store';
import { COUNTER_FEATURE_KEY, State } from './counter.reducer';

// Lookup the 'Counter' feature state managed by NgRx
export const getCounterFeatureState =
  createFeatureSelector<State>(COUNTER_FEATURE_KEY);

export const getCounterState = createSelector(
  getCounterFeatureState,
  (state) => state.counter
);
