import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatGridListResponsive } from './mat-grid-list-responsive.directive';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule
  ],
  declarations: [
    MatGridListResponsive
  ],
  exports: [
    MatGridListResponsive
  ]
})
export class MatGridListResponsiveModule { }
