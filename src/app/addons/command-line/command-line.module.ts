import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommandLineRoutingModule } from './command-line-routing.module';
import { CommandLineComponent } from './command-line.component';
import { AutofocusDirective } from 'src/app/directives/auto-focus.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { AutofocusDirective } from 'src/app/directives/auto-focus.directive';


@NgModule({
  declarations: [
    CommandLineComponent,
    AutofocusDirective
  ],
  imports: [
    CommonModule,
    CommandLineRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CommandLineModule { }
