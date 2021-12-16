import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgrxIoCounterDataAccessModule } from '@ngrx-examples/ngrx-io/counter/data-access';
import { CounterComponent } from './counter/counter.component';

const routes: Routes = [{ path: '', component: CounterComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgrxIoCounterDataAccessModule,
  ],
  declarations: [CounterComponent],
})
export class NgrxIoCounterFeatureMainModule {}
