import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IappState } from '../state/app.state';
import { GetUsers, GetUsersSuccess, EuserActions } from '../actions/user.actions';

import { UserService } from '../../services/user.service';
import { IuserHttp } from '../../models/user-http';
import { selectUserList } from '../selectors/user.selector';

@Injectable()
export class UserEffects {
    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EuserActions.GetUsers),
        switchMap(() => this.userService.getUsersV2()),
        switchMap((userHttp: IuserHttp) => of(new GetUsersSuccess(userHttp.users)))
    );


    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store<IappState>
    ) {}
}
