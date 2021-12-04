import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewOfficeComponent } from './view-office.component';

const routes: Routes = [{ path: '', component: ViewOfficeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewOfficeRoutingModule { }
