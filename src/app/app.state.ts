import {Injectable} from '@angular/core';
import {CurrencyEnum, IDemoState, LanguageEnum} from "./app.reducer";
import {AppActions} from "./app.actions";
import {Action, State, StateContext} from "@ngxs/store";
import {update} from "./libs/state/state";

export const DEFAULT: IDemoState = {
  user: {
    id: 0,
    name: '',
    language: LanguageEnum.ENGLISH,
    currency: CurrencyEnum.EUR
  },
};

@State<IDemoState>({
  name: 'AppState',
  defaults: DEFAULT
})
@Injectable({
  providedIn: 'root'
})
export class AppState {
  constructor() {
  }

  @Action(AppActions.GetUserData)
  GetUserData(ctx: StateContext<IDemoState>, action: AppActions.GetUserData): void {
    //Fake API
    const res = {
      id: 1,
      name: 'John Smith',
      language: LanguageEnum.CHINESE,
      currency: CurrencyEnum.EUR
    };
    update(ctx, draft => {
      draft.user = res;
    });
  }
}
