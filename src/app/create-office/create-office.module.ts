import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOfficeRoutingModule } from './create-office-routing.module';
import { CreateOfficeComponent } from './create-office.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [CreateOfficeComponent],
  imports: [
    CommonModule,
    CreateOfficeRoutingModule,
    FormsModule,
    HttpClientModule
  ]
})
export class CreateOfficeModule { }
