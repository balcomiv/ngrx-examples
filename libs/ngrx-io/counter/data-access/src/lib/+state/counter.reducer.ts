import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export const COUNTER_FEATURE_KEY = 'counter';

export interface State {
  counter: number;
}

const initialState: State = {
  counter: 0,
};

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => {
    return { ...state, counter: state.counter + 1 };
  }),
  on(CounterActions.decrement, (state) => ({
    ...state,
    counter: state.counter - 1,
  })),
  on(CounterActions.reset, (state) => ({ ...state, counter: 0 }))
);

// export function reducer(state: State, action: Action) {
//   return counterReducer(state, action);
// }
