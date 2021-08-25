import { PrismaService } from 'src/contacts/prisma.service';
import { Info } from '.prisma/client';
import { Prisma } from '@prisma/client';
export declare class InfoService {
    private prisma;
    constructor(prisma: PrismaService);
    get(id: number): Promise<Info>;
    getAll(): Promise<Info[]>;
    create(infoCreateInput: Prisma.InfoCreateInput): Promise<Info>;
    delete(id: number): Promise<Info>;
    update(id: number, infoUpdateInput: Prisma.InfoUpdateInput): Promise<Info>;
}
