import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOfficeRoutingModule } from './view-office-routing.module';
import { ViewOfficeComponent } from './view-office.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ViewOfficeComponent],
  imports: [
    CommonModule,
    ViewOfficeRoutingModule,
    FormsModule
  ]
})
export class ViewOfficeModule { }
