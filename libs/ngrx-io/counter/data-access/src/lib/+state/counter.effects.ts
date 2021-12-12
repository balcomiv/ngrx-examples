import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

// import * as CounterActions from './counter.actions';
// import * as CounterFeature from './counter.reducer';

@Injectable()
export class CounterEffects {
  constructor(private readonly actions$: Actions) {}
}
