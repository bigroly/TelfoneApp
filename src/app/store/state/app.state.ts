import { IuserState, initialUserState } from './user.state';

export interface IappState {
    users: IuserState;
}

export const initialAppState: IappState = {
    users: initialUserState
};

export function getInitialState(): IappState {
    return initialAppState;
}
