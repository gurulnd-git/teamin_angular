import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { OrgChartModule } from 'ng2-org-chart';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { LoginService } from './service/login.service';
import { SourcingService } from './service/sourcing.service';
import {  HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './layout/home/home.component';
import { OrgChartComponent } from './layout/org-chart/org-chart.component';
import { LoginComponent } from './layout/login/login.component';
import { ViewRoleComponent } from './layout/view-role/view-role.component';
import { ViewProgramComponent } from './layout/view-program/view-program.component';
import { ViewProjectComponent } from './layout/view-project/view-project.component';
import { ViewSourcingComponent } from './layout/view-sourcing/view-sourcing.component';
import {OrganizationChartModule} from 'primeng/organizationchart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TreeModule} from 'primeng/tree';
import {TreeNode} from 'primeng/api';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    UserProfileComponent,
    HomeComponent,
    OrgChartComponent,
    LoginComponent,
    ViewRoleComponent,
    ViewProgramComponent,
    ViewProjectComponent,
    ViewSourcingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    OrgChartModule, OrganizationChartModule, BrowserAnimationsModule, TreeModule
  ],
  providers: [LoginService, HttpModule, SourcingService ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
