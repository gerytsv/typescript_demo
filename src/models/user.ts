import { Person } from './person.js';
import { Role } from './role.js';

export interface User extends Person {
    username: string;
    password: string;
    roles: Role[];
    readonly salutation: string;
    getSalutation(): string;
}
