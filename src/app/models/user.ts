import { Iuser } from './Iuser';

export class User implements Iuser {
    userId: number;
    firstName: string;
    lastName: string;
    displayName: string;
    description: string;
    department: string;
    team: string;
}
