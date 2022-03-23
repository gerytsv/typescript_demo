import { Contact } from './models/contact.js';
import { IdType } from './models/person.js';
import { Role } from './models/role.js';
import { UserBase } from './userBase.js';

export class Author extends UserBase {
    constructor(
        id: IdType,
        username: string,
        password: string,
        roles: Role[] = [Role.AUTHOR],
        firstName: string,
        lastName: string,
        email: string,
        contacts?: Contact
    ) {
        super(id, username, password, [...roles, Role.AUTHOR], firstName, lastName, email, contacts);
    }
}
