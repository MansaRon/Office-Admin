import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'view-offices', loadChildren: () => import('./view-office/view-office.module').then(m => m.ViewOfficeModule) },
  { path: 'new-office', loadChildren: () => import('./create-office/create-office.module').then(m => m.CreateOfficeModule) },
  { path: 'edit-office', loadChildren: () => import('./edit-office/edit-office.module').then(m => m.EditOfficeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
