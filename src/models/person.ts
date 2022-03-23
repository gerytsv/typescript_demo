import { Contact } from './contact';
export type IdType = number;

export interface Person {
    id: IdType;
    firstName: string;
    lastName: string;
    email: string;
    contacts?: Contact;
}
