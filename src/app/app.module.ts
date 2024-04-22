import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { BrowserModule } from '@angular/platform-browser';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { WebSteComponent } from './web-ste/web-ste.component';
import { SideBarWebSiteComponent } from './shared/side-bar-web-site/side-bar-web-site.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { MeetingSalesComponent } from './pages/meeting-sales/meeting-sales.component';
// import { TableLeadsAncienComponent } from './pages/table-leads-ancien/table-leads-ancien.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    WebSteComponent,
    SideBarWebSiteComponent ,
    PageLoginComponent,
    
   
    
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    FixedPluginModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
