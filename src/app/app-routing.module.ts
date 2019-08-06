import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';

import { ViewRoleComponent } from './layout/view-role/view-role.component';
import { ViewProgramComponent } from './layout/view-program/view-program.component';
import { ViewProjectComponent } from './layout/view-project/view-project.component';
import { ViewSourcingComponent } from './layout/view-sourcing/view-sourcing.component';

const routes: Routes = [
  { path : '', component : LoginComponent },
  { path : 'home', component : HomeComponent },
  { path : 'viewrole', component : ViewRoleComponent },
  { path : 'viewprogram', component : ViewProgramComponent },
  { path : 'viewproject', component : ViewProjectComponent },
  { path : 'viewsource', component : ViewSourcingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
