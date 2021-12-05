import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditOfficeRoutingModule } from './edit-office-routing.module';
import { EditOfficeComponent } from './edit-office.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [EditOfficeComponent],
  imports: [
    CommonModule,
    EditOfficeRoutingModule,
    FormsModule
  ]
})
export class EditOfficeModule { }
