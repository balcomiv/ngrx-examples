import { createAction, props } from '@ngrx/store';
import { BookListEntity } from './book-list.models';

export const init = createAction('[BookList Page] Init');

export const loadBookListSuccess = createAction(
  '[BookList/API] Load BookList Success',
  props<{ bookList: BookListEntity[] }>()
);

export const loadBookListFailure = createAction(
  '[BookList/API] Load BookList Failure',
  props<{ error: any }>()
);
