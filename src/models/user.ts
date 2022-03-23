import { Person } from './person';
import { Role } from './role';

export interface User extends Person {
    username: string;
    password: string;
    roles: Role[];
    readonly salutation: string;
    getSalutation(): string;
}
