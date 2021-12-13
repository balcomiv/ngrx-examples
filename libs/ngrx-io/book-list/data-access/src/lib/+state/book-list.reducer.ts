import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as BookListActions from './book-list.actions';
import { BookListEntity } from './book-list.models';

export const BOOK_LIST_FEATURE_KEY = 'bookList';

export interface State extends EntityState<BookListEntity> {
  selectedId?: string | number; // which BookList record has been selected
  loaded: boolean; // has the BookList list been loaded
  error?: string | null; // last known error (if any)
}

export interface BookListPartialState {
  readonly [BOOK_LIST_FEATURE_KEY]: State;
}

export const bookListAdapter: EntityAdapter<BookListEntity> =
  createEntityAdapter<BookListEntity>();

export const initialState: State = bookListAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const bookListReducer = createReducer(
  initialState,
  on(BookListActions.init, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(BookListActions.loadBookListSuccess, (state, { bookList }) =>
    bookListAdapter.setAll(bookList, { ...state, loaded: true })
  ),
  on(BookListActions.loadBookListFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return bookListReducer(state, action);
}
