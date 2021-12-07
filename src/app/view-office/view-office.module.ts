import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOfficeRoutingModule } from './view-office-routing.module';
import { ViewOfficeComponent } from './view-office.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [ViewOfficeComponent, FilterPipe],
  imports: [
    CommonModule,
    ViewOfficeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class ViewOfficeModule { }
