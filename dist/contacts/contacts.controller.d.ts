import { ContactsService } from './contacts.service';
import { Contact } from '.prisma/client';
import { Prisma } from '@prisma/client';
export declare class ContactsController {
    private readonly contactsService;
    constructor(contactsService: ContactsService);
    getAll(): Promise<Contact[]>;
    get(id: any): Promise<Contact>;
    create(createConatactInput: Prisma.ContactCreateInput): Promise<Contact>;
    delete(id: any): Promise<Contact>;
    update(id: any, contactUpdateInput: Prisma.ContactUpdateInput): Promise<Contact>;
}
