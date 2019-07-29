import { Action } from '@ngrx/store';

import { Iuser } from '../../models/Iuser';

export enum EuserActions {
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    PostUser = '[User] Post User',
    PostUserSuccess = '[User] Post User Success'
}

export class GetUsers implements Action {
    public readonly type = EuserActions.GetUsers;
}

export class GetUsersSuccess implements Action {
    public readonly type = EuserActions.GetUsersSuccess;
    constructor(public payload: Iuser[]) {}
}

export class PostUser implements Action {
    public readonly type = EuserActions.PostUser;
    constructor(public payload: Iuser) {}
}

export class PostUserSuccess implements Action {
    public readonly type = EuserActions.PostUserSuccess;
    constructor(public payload: any) {}
}

export type UserActions = GetUsers | GetUsersSuccess | PostUser |  PostUserSuccess;
