import { Action } from '@ngrx/store';

import { Iuser } from '../../models/Iuser';

export enum EuserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success'
}

export class GetUsers implements Action {
    public readonly type = EuserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EuserActions.GetUsersSuccess;
    constructor(public payload: Iuser[]) {}
}

export type UserActions = GetUsers | GetUsersSuccess ;
