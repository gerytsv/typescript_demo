import { Contact } from './models/contact.js';
import { IdType } from './models/person.js';
import { Role } from './models/role.js';
import { User } from './models/user.js';

export class UserBase implements User {
    constructor(
        public id: IdType,
        public username: string,
        public password: string,
        public roles: Role[],
        public firstName: string,
        public lastName: string,
        public email: string,
        public contacts?: Contact
    ) {}

    // salutation is readonly so we don't need it in the ctor
    get salutation() {
        return this.getSalutation();
    }

    getSalutation(): string {
        return `Hi, ${this.username} in role ${this.roles.map((r) => Role[r]).join(', ')}`;
    }
}
