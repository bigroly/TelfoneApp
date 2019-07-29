import { Iuser } from '../../models/Iuser';

export interface IuserState {
    users: Iuser[];
}

export const initialUserState: IuserState = {
    users: null
};
