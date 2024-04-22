import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { Table2Component } from '../../pages/table2/table2.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import {DashSalesComponent}         from '../../pages/dash-sales/dash-sales.component'
import { Table3Component } from 'app/table3/table3.component';
import { TabEmployersComponent } from "../../tab-employers/tab-employers.component";
import { MeetingSalesComponent } from '../../pages/meeting-sales/meeting-sales.component';
import { TableLeadsAncienComponent } from '../../pages/table-leads-ancien/table-leads-ancien.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'sales',          component: Table2Component },
    { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'LeadTodayProessed',           component: MapsComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'dashSales',        component: DashSalesComponent },
    { path: 'tableLeadsSales',   component: Table3Component },
    { path: 'lead/:id',   component: TabEmployersComponent },
    { path: 'meetSales/:id',   component: MeetingSalesComponent },
    {
        path: 'ancienLead',
        component: TableLeadsAncienComponent
      },
];
