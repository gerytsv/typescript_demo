import { Contact } from './models/contact';
import { IdType } from './models/person';
import { Role } from './models/role';
import { User } from './models/user';

export class UserBase implements User {
    constructor(
        public id: IdType,
        public username: string,
        public password: string,
        public roles: Role[],
        public salutation: string,
        public firstName: string,
        public lastName: string,
        public email: string,
        public contacts?: Contact
    ) {}

    getSalutation(): string {
        return `Hi, ${this.username} in role ${this.roles.map((r) => Role[r]).join(', ')}`;
    }
}
