import { Component, OnInit } from '@angular/core';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  roles: any[];
  projects: any[];
  programs: any[];
  sourcingRequest: any;
  req: any;
  source: Source;
  navigationExtras: NavigationExtras;
  constructor(private sourcingService: SourcingService, private route: Router) {
    this.sourcingService.loadInitData().subscribe(response => {
      this.roles = response.roles;
      this.projects = response.project;
      this.programs = response.programs;
    });
  }

  ngOnInit() {
  }

  addSource(data) {
    console.log(data);
    this.req = {
      'sourcingDTO' : {
        'candidateName' : data.candidateName,
        'actual_start_date' : data.actual_start_date,
        'planned_start_date' : data.planned_start_date,
        'yearofExperience' : data.yearofExperience,
        'status' : 'Pending',
        'projectDTO' : {
          'projectId' : data.projectId
        },
        'rolesDTO': {
          'roleId' : data.roleId
        }
      }
     };
    this.sourcingService.createSource(this.req).subscribe(response => {
      this.route.navigate(['/home']);
      window.alert('Data Saved successfully!!!');
    });
  }

  addProgram(data) {
    this.req = {
      'programDTO' : {
        'programName' : data.programName
      }
    };
    this.sourcingService.createProgram(this.req).subscribe(response => {
      this.route.navigate(['home'], this.navigationExtras);
      window.alert('Data Saved successfully!!!');
    });
  }

  addRole(data) {
    this.req = {
      'roleDTO' : {
        'roleName' : data.roleName
      }
    };
    this.sourcingService.createRole(this.req).subscribe(response => {
      this.route.navigate(['/home']);
      window.alert('Data Saved successfully!!!');
    });
  }

  addProject(data) {
    this.req = {
      'projectDTO' : {
        'projectName' : data.projectName,
        'programDTO' : {
          'programId' : data.programId
        }
      }
    };
    this.sourcingService.createProject(this.req).subscribe(response => {
      this.route.navigate(['home'], this.navigationExtras);
      window.alert('Data Saved successfully!!!');
    });
  }

}
