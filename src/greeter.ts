import { Reader } from './reader.js';
import { Admin } from './admin.js';
import { UserBase } from './userBase.js';
import { User } from './models/user.js';
import { Role } from './models/role.js';
import { Author } from './author.js';

export function greeter(user: User) {
    return `${user.salutation}!`;
}

export const DEFAULT_USERS = [
    new UserBase(1, 'baseUser', 'myPass', [Role.READER, Role.ADMIN], 'Ivan', 'Petkov', 'ivan@gmail.com'),
    new Reader(2, 'reader', 'myPass', [Role.AUTHOR], 'Ivan', 'Readera', 'ivanRe@gmail.com'),
    new Author(3, 'author', 'myPass', [Role.READER], 'Ivan', 'Avtora', 'ivanAv@gmail.com'),
    new Admin(4, 'admin', 'myPass', [Role.AUTHOR], 'Ivan', 'Admina', 'ivanAd@gmail.com'),
];
