import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {Select, Store} from "@ngxs/store";
import {AppState, DEFAULT} from "../app.state";
import {IDemoState} from "../app.reducer";
import {Router} from "@angular/router";
import {AppActions} from "../app.actions";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  private _subscription: Subscription = new Subscription();
  @Select(AppState) appState: any;
  state: IDemoState = DEFAULT;

  constructor(private _store: Store,
              private _router: Router)
  { }

  ngOnInit() {
    this._subscription.add(this.appState.subscribe((res: IDemoState) => {
      this.state = res;      
    }));
  }

  doLogin(): void {
    this._store.dispatch(new AppActions.GetUserData()) //subscribe if action return any response    
  }

  goToCart(): void {
    this._router.navigateByUrl('/cart');
  }
  
  ngOnDestroy() {
    this._subscription.unsubscribe();
  }
}
