import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateOfficeRoutingModule } from './create-office-routing.module';
import { CreateOfficeComponent } from './create-office.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreateOfficeComponent],
  imports: [
    CommonModule,
    CreateOfficeRoutingModule,
    FormsModule
  ]
})
export class CreateOfficeModule { }
