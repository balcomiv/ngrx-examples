import { createFeatureSelector } from '@ngrx/store';
import { COUNTER_FEATURE_KEY } from './counter.reducer';

// Lookup the 'Counter' feature state managed by NgRx
export const getCounterState =
  createFeatureSelector<number>(COUNTER_FEATURE_KEY);
