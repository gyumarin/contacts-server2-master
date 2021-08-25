import { InfoService } from './info.service';
import { Prisma } from '@prisma/client';
export declare class InfoController {
    private readonly infoService;
    constructor(infoService: InfoService);
    getAll(): Promise<import(".prisma/client").Info[]>;
    get(id: any): Promise<import(".prisma/client").Info>;
    delete(id: any): Promise<import(".prisma/client").Info>;
    create(infoCreateInput: Prisma.InfoCreateInput): Promise<import(".prisma/client").Info>;
    update(id: any, infoUpdateInput: Prisma.InfoUpdateInput): Promise<import(".prisma/client").Info>;
}
