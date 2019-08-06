import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';
@Component({
  selector: 'app-view-sourcing',
  templateUrl: './view-sourcing.component.html',
  styleUrls: ['./view-sourcing.component.css']
})
export class ViewSourcingComponent implements OnInit {
  source: Source;
  ngOnInit() {
  }
  constructor(private sourcingService: SourcingService, private route: Router) {
    this.sourcingService.loadSourcings().subscribe(response => {
      this.source = response.sourcingDTOS;
      console.log(this.source);
    });

  }
}
