import { BookListEntity } from './book-list.models';
import {
  bookListAdapter,
  BookListPartialState,
  initialState,
} from './book-list.reducer';
import * as BookListSelectors from './book-list.selectors';

describe('BookList Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getBookListId = (it: BookListEntity) => it.id;
  const createBookListEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as BookListEntity);

  let state: BookListPartialState;

  beforeEach(() => {
    state = {
      bookList: bookListAdapter.setAll(
        [
          createBookListEntity('PRODUCT-AAA'),
          createBookListEntity('PRODUCT-BBB'),
          createBookListEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('BookList Selectors', () => {
    it('getAllBookList() should return the list of BookList', () => {
      const results = BookListSelectors.getAllBookList(state);
      const selId = getBookListId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = BookListSelectors.getSelected(state) as BookListEntity;
      const selId = getBookListId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getBookListLoaded() should return the current "loaded" status', () => {
      const result = BookListSelectors.getBookListLoaded(state);

      expect(result).toBe(true);
    });

    it('getBookListError() should return the current "error" state', () => {
      const result = BookListSelectors.getBookListError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
