import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';
@Component({
  selector: 'app-view-program',
  templateUrl: './view-program.component.html',
  styleUrls: ['./view-program.component.css']
})
export class ViewProgramComponent implements OnInit {

  roles: any[];
  projects: any[];
  programs: any[];

  ngOnInit() {
}

constructor(private sourcingService: SourcingService, private route: Router) {
  this.sourcingService.loadInitData().subscribe(response => {
    this.programs = response.programs;
  });
}

}
