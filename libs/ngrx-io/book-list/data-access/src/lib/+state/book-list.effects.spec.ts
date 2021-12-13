import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as BookListActions from './book-list.actions';
import { BookListEffects } from './book-list.effects';

describe('BookListEffects', () => {
  let actions: Observable<Action>;
  let effects: BookListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        BookListEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(BookListEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: BookListActions.init() });

      const expected = hot('-a-|', {
        a: BookListActions.loadBookListSuccess({ bookList: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
