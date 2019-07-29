import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';

import { IappState } from '../state/app.state';
import { GetUsers, GetUsersSuccess, EuserActions, PostUser, PostUserSuccess } from '../actions/user.actions';

import { UserService } from '../../services/user.service';
import { Iuser } from 'src/app/models/Iuser';

import { ToastrService } from 'ngx-toastr';

@Injectable()
export class UserEffects {
    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsers>(EuserActions.GetUsers),
        switchMap(() => this.userService.getUsersV2()),
        switchMap((userHttp: Iuser[]) => of(
            new GetUsersSuccess(userHttp)
        ))
    );

    @Effect()
    postUser$ = this.actions$.pipe(
        ofType<PostUser>(EuserActions.PostUser),
        switchMap((action) => this.userService.postUserV2(action.payload)),
        switchMap((response: any) => of(
            new PostUserSuccess(response, this.toastrService)
        ))
    );

    constructor(
        private userService: UserService,
        private actions$: Actions,
        private store: Store<IappState>,
        private toastrService: ToastrService
    ) {}
}
