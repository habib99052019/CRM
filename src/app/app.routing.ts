import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebSteComponent } from './web-ste/web-ste.component';
import { SideBarWebSiteComponent } from './shared/side-bar-web-site/side-bar-web-site.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { TabEmployersComponent } from "./tab-employers/tab-employers.component";
// import { TableLeadsAncienComponent } from './pages/table-leads-ancien/table-leads-ancien.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(x => x.AdminLayoutModule)
  }]},

  // {
  //   path: '**',
  //   redirectTo: 'dashboard'
  // },

  {
    path: 'web&landing',
    component:SideBarWebSiteComponent
  },
  {
    path: 'lead/:id',
    component:TabEmployersComponent
  },
  {
    path: 'landingPage',
    component:WebSteComponent
  },
  {
    path: 'login',
    component: PageLoginComponent
  },

]
