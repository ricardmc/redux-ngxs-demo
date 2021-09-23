import {IUser} from "./app.reducer";

export namespace AppActions {
  const prefix = (action: string) => {
    return 'AppState: ' + action;
  };

  export class GetUserData {
    static readonly type = prefix('Get User Data');

    constructor() {
    }
  }

  export class SetUserData {
    static readonly type = prefix('Set User Data');

    constructor(public user: IUser) {
    }
  }
}
