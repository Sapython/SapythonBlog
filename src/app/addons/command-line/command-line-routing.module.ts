import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandLineComponent } from './command-line.component';

const routes: Routes = [{ path: '', component: CommandLineComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommandLineRoutingModule { }
