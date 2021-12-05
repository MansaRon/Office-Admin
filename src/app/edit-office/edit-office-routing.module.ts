import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditOfficeComponent } from './edit-office.component';

const routes: Routes = [{ path: '', component: EditOfficeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditOfficeRoutingModule { }
