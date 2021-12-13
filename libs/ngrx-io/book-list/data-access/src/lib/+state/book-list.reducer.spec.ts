import { Action } from '@ngrx/store';

import * as BookListActions from './book-list.actions';
import { BookListEntity } from './book-list.models';
import { State, initialState, reducer } from './book-list.reducer';

describe('BookList Reducer', () => {
  const createBookListEntity = (id: string, name = ''): BookListEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid BookList actions', () => {
    it('loadBookListSuccess should return the list of known BookList', () => {
      const bookList = [
        createBookListEntity('PRODUCT-AAA'),
        createBookListEntity('PRODUCT-zzz'),
      ];
      const action = BookListActions.loadBookListSuccess({ bookList });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
