import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { LayoutSalesRoutingModule } from './layout-sales-routing.module';
// import { DashSalesComponent } from '../pages/dash-sales/dash-sales.component';
// import { SidebarSalesComponent } from 'app/sidebar-sales/sidebar-sales.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({ 
  declarations: [
    // SidebarSalesComponent
  ],
  imports: [
    CommonModule,
    // LayoutSalesRoutingModule,
    // RouterModule.forChild(LayoutSalesRouting),
    LayoutSalesRoutingModule,
    FormsModule ,
  
    NgbModule,
    RouterModule
  ]
})
export class LayoutSalesModule { }
