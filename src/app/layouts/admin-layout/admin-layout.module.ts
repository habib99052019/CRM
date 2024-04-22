import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { Table2Component }           from '../../pages/table2/table2.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { MapsComponent }            from '../../pages/maps/maps.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';
import {DashSalesComponent}         from '../../pages/dash-sales/dash-sales.component';
import { TabEmployersComponent } from "../../tab-employers/tab-employers.component";
import { MeetingSalesComponent } from '../../pages/meeting-sales/meeting-sales.component';
import { TableLeadsAncienComponent } from '../../pages/table-leads-ancien/table-leads-ancien.component';
// import { TableLeadsAncienComponent } from './pages/table-leads-ancien/table-leads-ancien.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    Table2Component ,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    DashSalesComponent,
    TabEmployersComponent,
    MeetingSalesComponent,
    TableLeadsAncienComponent
  ]
})

export class AdminLayoutModule {}
