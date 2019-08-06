import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IEmployee } from 'ng2-org-chart';
import { ActivatedRoute } from '@angular/router';
import { SourcingService } from '../../service/sourcing.service';
import { Source } from '../../model/source.model';
import { OrganizationChartModule} from 'primeng/organizationchart';
import {TreeNode} from 'primeng/api';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
        .company.ui-organizationchart .ui-organizationchart-node-content.ui-person {
            padding: 0;
            border: 0 none;
        }

        .node-header,.node-content {
            padding: .5em .7em;
        }

        .node-header {
            background-color: #495ebb;
            color: #ffffff;
        }

        .node-content {
            text-align: center;
            border: 1px solid #495ebb;
        }

        .node-content img {
            border-radius: 50%;
        }

        .ui-organizationchart-node-content.department-cfo {
            background-color: #7247bc;
            color: #ffffff;
        }

        .ui-organizationchart-node-content.department-coo {
            background-color: #a534b6;
            color: #ffffff;
        }

        .ui-organizationchart-node-content.department-cto {
            background-color: #e9286f;
            color: #ffffff;
        }

        .ui-person .ui-node-toggler {
            color: #495ebb !important;
        }

        .department-cto .ui-node-toggler {
            color: #8a0a39 !important;
        }
    `],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  sourcing: IEmployee[];
  source: Source;
  data: TreeNode[];

  constructor(private sourcingService: SourcingService, ) {
  }

  ngOnInit() {
    this.sourcingService.loadChart().subscribe(response => {
      this.sourcing = response.chartDTOS[0];
      this.data = [response.chartDTOS[0]];
      console.log('response1' + JSON.stringify(response.chartDTOS[0]));
    });

  }
}
