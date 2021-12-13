import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as BookListActions from './book-list.actions';
import * as BookListFeature from './book-list.reducer';

@Injectable()
export class BookListEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BookListActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return BookListActions.loadBookListSuccess({ bookList: [] });
        },
        onError: (action, error) => {
          console.error('Error', error);
          return BookListActions.loadBookListFailure({ error });
        },
      })
    )
  );

  constructor(private readonly actions$: Actions) {}
}
