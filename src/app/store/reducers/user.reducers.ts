import { EuserActions, UserActions } from '../actions/user.actions';
import { initialUserState, IuserState  } from '../state/user.state';

export const userReducers = (
    state = initialUserState,
    action: UserActions
): IuserState => {
    switch (action.type) {
        case EuserActions.GetUsersSuccess: {
            return {
                ...state,
                users: action.payload
            };
        }

        case EuserActions.PostUserSuccess: {
            return state;
        }

        default:
            return state;
    }
};
