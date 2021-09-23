import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { Select, Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { IDemoState } from '../app.reducer';
import { AppState, DEFAULT } from '../app.state';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  @Select(AppState) appState: any;
  state: IDemoState = DEFAULT;

  constructor(private _store: Store,
              private _router: Router)
  { }

  ngOnInit(): void {
    this._subscription.add(this.appState.subscribe((res: IDemoState) => {
      this.state = res
    }));
  }

  showUserCurrency(): void {
    
  }

  goBack(): void {
    this._router.navigateByUrl('');
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}


