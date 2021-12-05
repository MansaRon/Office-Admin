import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateOfficeComponent } from './create-office.component';

const routes: Routes = [{ path: '', component: CreateOfficeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateOfficeRoutingModule { }
