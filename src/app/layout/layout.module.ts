import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { OrgChartComponent } from './org-chart/org-chart.component';
import { OrgChartModule } from 'ng2-org-chart';
import { LayoutRoutingModule } from './layout-routing.module';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewProgramComponent } from './view-program/view-program.component';
import { ViewProjectComponent } from './view-project/view-project.component';
import { ViewRoleComponent } from './view-role/view-role.component';
import { ViewSourcingComponent } from './view-sourcing/view-sourcing.component';


@NgModule({
  declarations : [
    HomeComponent,
    OrgChartComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    ViewProgramComponent,
    ViewProjectComponent,
    ViewRoleComponent,
    ViewSourcingComponent

  ],
  imports: [
    CommonModule, OrgChartModule, LayoutRoutingModule
  ]
})
export class LayoutModuleModule { }
