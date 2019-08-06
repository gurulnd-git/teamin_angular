import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';
@Component({
  selector: 'app-view-project',
  templateUrl: './view-project.component.html',
  styleUrls: ['./view-project.component.css']
})
export class ViewProjectComponent implements OnInit {
  projects: any[];
  constructor(private sourcingService: SourcingService, private route: Router) {
    this.sourcingService.loadInitData().subscribe(response => {
      this.projects = response.project;
      console.log(this.projects);
    });
  }

  ngOnInit() {
  }

}
