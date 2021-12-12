import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCounterState } from '../../../../data-access/src';
import * as CounterActions from '../../../../data-access/src/lib/+state/counter.actions';
@Component({
  selector: 'ngrx-examples-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent {
  count$: Observable<number>;

  constructor(private store: Store) {
    this.count$ = this.store.select(getCounterState);
  }

  increment() {
    this.store.dispatch(CounterActions.increment());
  }

  decrement() {
    this.store.dispatch(CounterActions.decrement());
  }

  reset() {
    this.store.dispatch(CounterActions.reset());
  }
}
