import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';
@Component({
  selector: 'app-view-role',
  templateUrl: './view-role.component.html',
  styleUrls: ['./view-role.component.css']
})
export class ViewRoleComponent implements OnInit {
  roles: any[];

  ngOnInit() {
  }
  constructor(private sourcingService: SourcingService, private route: Router) {
    this.sourcingService.loadInitData().subscribe(response => {
      this.roles = response.roles;
      console.log(this.roles);
    });
}
}
