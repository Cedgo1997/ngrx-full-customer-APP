import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'customers',
    loadChildren: '../app/customers/customers.module#CustomersModule',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
