import { Component, OnInit, Input } from '@angular/core';
import { IEmployee } from 'ng2-org-chart';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';

@Component({
  selector: 'app-org-chart',
  templateUrl: './org-chart.component.html',
  styleUrls: ['./org-chart.component.css']
})
export class OrgChartComponent implements OnInit {
  @Input() sourcing: IEmployee[];
  constructor(private sourcingService: SourcingService) {
  }

  ngOnInit() {
  }
}
