import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  BOOK_LIST_FEATURE_KEY,
  State,
  bookListAdapter,
} from './book-list.reducer';

// Lookup the 'BookList' feature state managed by NgRx
export const getBookListState = createFeatureSelector<State>(
  BOOK_LIST_FEATURE_KEY
);

const { selectAll, selectEntities } = bookListAdapter.getSelectors();

export const getBookListLoaded = createSelector(
  getBookListState,
  (state: State) => state.loaded
);

export const getBookListError = createSelector(
  getBookListState,
  (state: State) => state.error
);

export const getAllBookList = createSelector(getBookListState, (state: State) =>
  selectAll(state)
);

export const getBookListEntities = createSelector(
  getBookListState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getBookListState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getBookListEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
