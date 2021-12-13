import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromBookList from './+state/book-list.reducer';
import { BookListEffects } from './+state/book-list.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromBookList.BOOK_LIST_FEATURE_KEY,
      fromBookList.reducer
    ),
    EffectsModule.forFeature([BookListEffects]),
  ],
})
export class NgrxIoBookListDataAccessModule {}
