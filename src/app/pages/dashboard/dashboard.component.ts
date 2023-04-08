import {Component, OnInit} from '@angular/core';
import {StatisticsService} from "../../services/services/statistics.service";
import {TokenService} from "../../services/token-service/token.service";
import {StatisticsResponse} from "../../services/models/statistics-response";
import {DecimalPipe} from "@angular/common";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DecimalPipe]
})
export class DashboardComponent implements OnInit {
  stats: StatisticsResponse | undefined = undefined;

  constructor(
    private statsService: StatisticsService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.fetchStats();
  }

  private fetchStats(): void {
    this.statsService.getUserStats({'user-id': this.tokenService.getUserId})
      .subscribe({
        next: (data) => {
          this.stats = data;
        }
      });
  }
}
