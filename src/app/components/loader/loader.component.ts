import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoaderService} from "../../services/loader/loader.service";
import {Subscription} from "rxjs";
import {LoaderState} from "../../services/loader/loader-state";

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy{
  displaySpinner = false;
  subscription: Subscription | undefined;
  constructor(
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.subscription = this.loaderService.loaderState
      .subscribe({
        next: (state: LoaderState) => {
          this.displaySpinner = state.show;
        }
      });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


}
