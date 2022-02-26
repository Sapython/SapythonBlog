import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnsRefundsComponent } from './returns-refunds.component';

const routes: Routes = [{ path: '', component: ReturnsRefundsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReturnsRefundsRoutingModule { }
