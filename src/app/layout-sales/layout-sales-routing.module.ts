import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { DashSalesComponent } from '../pages/dash-sales/dash-sales.component';

const routes: Routes = [
// {path:"",component:DashSalesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutSalesRoutingModule { }
