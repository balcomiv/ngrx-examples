import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { CounterEffects } from './+state/counter.effects';
import * as fromCounter from './+state/counter.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCounter.COUNTER_FEATURE_KEY,
      fromCounter.reducer
    ),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class NgrxIoCounterDataAccessModule {}
