import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { IappState } from '../state/app.state';
import { userReducers } from '../reducers/user.reducers';

export const appReducers: ActionReducerMap<IappState, any> = {
    users: userReducers
};
