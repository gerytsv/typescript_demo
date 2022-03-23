import { Contact } from './contact.js';
export type IdType = number;

export interface Person {
    id: IdType;
    firstName: string;
    lastName: string;
    email: string;
    contacts?: Contact;
}
